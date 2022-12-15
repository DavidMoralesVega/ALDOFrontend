import { Component, OnInit } from '@angular/core';
import { ZListArea } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import { DepartamentLaw } from 'src/app/modules/admin/pages/departament-law/entities';
import { FormControl, FormGroup } from '@angular/forms';
import { DefaultErrorMatcher } from '../../../../../core/shared/default.error-matcher';
import { search } from 'src/app/core/entities/interfaces/search.interface';

@Component({
	selector: 'z-commission',
	templateUrl: './departament-law-search.component.html',
	styleUrls: ['./departament-law-search.component.scss']
})
export class DepartamentLawsSearchComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public findAllResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	public searchResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public searchIsLoading$: Observable<boolean>;

	public ZListArea: any[] = ZListArea;

	private subscriptors: Subscription[] = [];
	private subscriptorsSearch: Subscription[] = [];
	public dataSearchDepartament: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};

	element: boolean = false;

	constructor(private readonly departamentLawFacade: DepartamentLawFacade) {
		this.findAllResponse$ = this.departamentLawFacade.findAllResponse$;
		this.findAllIsLoading$ = this.departamentLawFacade.findAllIsLoading$;

		this.searchResponse$ = this.departamentLawFacade.searchResponse$;
		this.searchIsLoading$ = this.departamentLawFacade.searchIsLoading$;
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
			daterangeEnd: new FormControl('', [])
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
				visibility: 'all'
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

		// console.log(this.dataSearchDepartament);
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataSearchDepartament = response?.data.filter((data) => {
						return data;
					});
				}
			})
		);
	}

	reset() {
		this.findAll();
		this.formCreate.reset();
	}
	buscarConvocatoria(termino: string): DepartamentLaw[] {
		// this.findAll();

		let Arr: DepartamentLaw[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataSearchDepartament.length; i++) {
			let departamentLaws = this.dataSearchDepartament[i];

			let nombre = departamentLaws.dttitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(departamentLaws);
			}
		}

		this.dataSearchDepartament = Arr;
		// console.log(Arr);
		return Arr;
	}

	create() {
		console.log('hola antes form');

		if (this.formCreate.invalid) return;
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
