import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ZListArea } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { BehaviorSubject, Observable, Subscription, filter, map, tap, take } from 'rxjs';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import {
	DepartamentLaw,
	DepartamentLawAdapter
} from 'src/app/modules/admin/pages/departament-law/entities';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from '../../../../../core/shared/default.error-matcher';
import { search } from 'src/app/core/entities/interfaces/search.interface';
import { Legislature } from 'src/app/modules/admin/pages/legislature/entities';
import { LegislatureFacade } from 'src/app/modules/admin/pages/legislature/facades/legislature.facade';

@Component({
	selector: 'z-commission',
	templateUrl: './departamentLaws.component.html',
	styleUrls: ['./departamentLaws.component.scss']
})
export class DepartamentLawsComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public findAllResponse$: Observable<Response<DepartamentLawAdapter[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public searchResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public searchIsLoading$: Observable<boolean>;
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	public ZListArea: any[] = ZListArea;

	@ViewChild('buscarTexto', { static: true }) buscarTexto!: ElementRef<HTMLInputElement>;

	private subscriptors: Subscription[] = [];
	private subscriptorsSearch: Subscription[] = [];
	public dataSearchDepartament: any = [];

	public dataDepartamentLaw$: BehaviorSubject<DepartamentLawAdapter[]> = new BehaviorSubject<
		DepartamentLawAdapter[]
	>([]);

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};

	element: boolean = false;

	constructor(
		private readonly departamentLawFacade: DepartamentLawFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		this.legislatureFacade.findAll(this.pagination);
		this.findAllResponse$ = this.departamentLawFacade.findAllResponse$;
		this.findAllIsLoading$ = this.departamentLawFacade.findAllIsLoading$;

		this.searchResponse$ = this.departamentLawFacade.searchResponse$;
		this.searchIsLoading$ = this.departamentLawFacade.searchIsLoading$;

		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.departamentLawFacade.findAll(this.pagination);
		this.initFormCreate();
	}

	ngAfterViewInit(): void {
		this.findAll();
		// this.findSearch();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			departLawArea: new FormControl('', []),
			dataQuery: new FormControl('', []),
			daterangeInit: new FormControl('', []),
			daterangeEnd: new FormControl('', []),
			dataIdLegdepart: new FormControl('', []),
			dataNumLey: new FormControl('', [])
		});
	}
	get departLawArea() {
		return this.formCreate.get('departLawArea')!;
	}
	get daterangeInit() {
		return this.formCreate.get('daterangeInit')!;
	}
	get daterangeEnd() {
		return this.formCreate.get('daterangeEnd')!;
	}
	get dataQuery() {
		return this.formCreate.get('dataQuery')!;
	}
	get dataIdLegdepart() {
		return this.formCreate.get('dataIdLegdepart')!;
	}
	get dataNumLey() {
		return this.formCreate.get('dataNumLey')!;
	}

	showData($event: any) {
		$event.preventDefault();
		return (this.element = !this.element);
	}

	findSearch() {
		if (this.departLawArea.value) {
			let dateInit = this.daterangeInit.value;
			dateInit =
				dateInit.getFullYear().toString() +
				'-' +
				(dateInit.getMonth() + 1).toString() +
				'-' +
				dateInit.getDate().toString();

			let dateEnd = this.daterangeEnd.value;
			dateEnd =
				dateEnd.getFullYear().toString() +
				'-' +
				(dateEnd.getMonth() + 1).toString() +
				'-' +
				dateEnd.getDate().toString();

			const dataSearch: search = {
				data: this.dataQuery.value,
				visibility: 'publico',
				state: true,
				area: this.departLawArea.value,
				dateStart: dateInit,
				dateEnd: dateEnd
			};

			this.departamentLawFacade.search(dataSearch);

			this.subscriptorsSearch.push(
				this.searchResponse$.subscribe({
					next: (response: Response<DepartamentLaw[]> | null) => {
						if (response != null) {
							let dataResponse: any = [];
							response?.data.forEach((element) => {
								dataResponse.push(element);
							});
							this.dataSearchDepartament = dataResponse;
						}
					}
				})
			);
		} else {
			const dataSearch: search = {
				data: this.dataQuery.value,
				visibility: 'publico',
				state: true
			};

			this.departamentLawFacade.search(dataSearch);

			this.subscriptorsSearch.push(
				this.searchResponse$.subscribe({
					next: (response: Response<DepartamentLaw[]> | null) => {
						if (response != null) {
							let dataResponse: any = [];
							response?.data.forEach((element) => {
								dataResponse.push(element);
							});
							this.dataSearchDepartament = dataResponse;
						}
					}
				})
			);
		}
	}

	findAll() {
		this.findAllResponse$
			.pipe(
				map((response: Response<DepartamentLawAdapter[]> | null) => {
					const dataResponse = response?.data || [];
					return dataResponse.filter((data: DepartamentLawAdapter | any) => {
						if (data.dtvisibility === 'Público' && data.dtstate === true) {
							return data;
						}
					});
				})
			)
			.subscribe((data: DepartamentLawAdapter[]) => {
				this.dataDepartamentLaw$.next(data);
			});
	}

	reset() {
		this.findAll();
		this.formCreate.reset();
	}

	resetForm(): void {
		this.findAll();
		this.buscarTexto.nativeElement.value = '';
	}

	buscarConvocatoria(termino: string) {
		termino = termino.toLowerCase();

		this.dataDepartamentLaw$.pipe(take(1)).subscribe((currentData) => {
			const filteredData = currentData.filter((departamentLaws) =>
				departamentLaws.dttitle.toLowerCase().includes(termino)
			);

			this.dataDepartamentLaw$.next(filteredData);
		});
	}

	create() {
		if (this.formCreate.invalid) return;
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription) => subscription.unsubscribe());
	}

	/*
		https://github.com/typeorm/typeorm/issues/2929
		https://stackoverflow.com/questions/52814795/how-to-query-with-or-operation-in-where-object-using-find-options-api-in-typeo
		https://stackoverflow.com/questions/71722950/typeorm-query-builder-filtering-multiple-columns-with-one-value
		https://stackoverflow.com/questions/64260584/how-to-select-only-single-multiple-fields-from-joined-entity-in-typeorm
		http://www.silep.gob.bo/

		data privada true
		data publica false
		data privada false
		data publica true
		data all(privada,publica) all(false,true)

		data privada true area
		data publica false area
		data privada false area
		data publica true area
		data all(privada,publica) all(false,true) area

		data privada true area (between fechaInicio  fechaFin)
		data publica false area (between fechaInicio  fechaFin)
		data privada false area (between fechaInicio  fechaFin)
		data publica true area (between fechaInicio  fechaFin)
		data all(privada,publica) all(false,true) area (between fechaInicio  fechaFin)


		import { MoreThan } from "typeorm";
		import { Like } from "typeorm";
		import { Between } from 'typeorm';
import { Legislature } from '../../../../admin/pages/legislature/entities/models/legislature.model';
import { LegislatureFacade } from '../../../../admin/pages/legislature/facades/legislature.facade';

		this.productsRepository.find({
		where: [
			{ name: "Silla" },
			{ stock: 1 },
			{ name: "caja", description: "Caja de madera" },
		],
		});


		this.productsRepository.find({
		name: Like('%silla%'),
		description: Like('%silla%')
		});


		this.productsRepository.find({
		where: {
			stock: Between(3,8)
		}
		});

	*/
}
