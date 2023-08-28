import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ZListArea } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { BehaviorSubject, Observable, Subscription, map, take } from 'rxjs';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import {
	DepartamentLaw,
	DepartamentLawAdapter
} from 'src/app/modules/admin/pages/departament-law/entities';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DefaultErrorMatcher } from '../../../../../core/shared/default.error-matcher';
import { search } from 'src/app/core/entities/interfaces/search.interface';
import { LegislatureFacade } from '../../legislature/facades/legislature.facade';
import { Legislature } from '../../legislature/entities/models/legislature.model';

@Component({
	selector: 'z-commission',
	templateUrl: './departament-law-search.component.html',
	styleUrls: ['./departament-law-search.component.scss']
})
export class DepartamentLawsSearchComponent implements OnInit {
	public formCreate: FormGroup = new FormGroup({});

	public findAllResponse$: Observable<Response<DepartamentLawAdapter[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	public searchResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public searchIsLoading$: Observable<boolean>;

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	@ViewChild('buscarTexto', { static: true }) buscarTexto!: ElementRef<HTMLInputElement>;

	public ZListArea: any[] = ZListArea;
	private subscriptorsSearch: Subscription[] = [];
	public dataDepartament: Observable<Legislature[]> = new Observable<Legislature[]>();
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
				visibility: 'all',
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
							// this.dataSearchDepartament = dataResponse;
						}
					}
				})
			);
		} else {
			const dataSearch: search = {
				data: this.dataQuery.value,
				visibility: 'all',
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
							// this.dataSearchDepartament = dataResponse;
						}
					}
				})
			);
		}
	}

	findAll() {
		/* this.dataSearchDepartament = response?.data.filter((data) => {
						if (data.dtvisibility === 'publico' && data.dtstate === true) {
							return data;
						}
		}); */

		this.findAllResponse$
			.pipe(
				map((response: Response<DepartamentLawAdapter[]> | null) => {
					return response?.data || [];
				})
			)
			.subscribe((data: DepartamentLawAdapter[]) => {
				this.dataDepartamentLaw$.next(data);
			});
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
}
