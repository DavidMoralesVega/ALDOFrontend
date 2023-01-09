import { Component, OnInit } from '@angular/core';
import { ZListArea, ZListCategory, ZListModule } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { DepartamentLaw } from 'src/app/modules/admin/pages/departament-law/entities';
import { FormControl, FormGroup } from '@angular/forms';
import { DefaultErrorMatcher } from '../../../../../core/shared/default.error-matcher';
import { search } from 'src/app/core/entities/interfaces/search.interface';
import { Library } from '../../library/entities';
import { LibraryFacade } from '../../library/facades/library.facade';
import { SearchLibrary } from 'src/app/core/entities/interfaces/searchLibrary.interface';

@Component({
	selector: 'z-commission',
	templateUrl: './library-search.component.html',
	styleUrls: ['./library-search.component.scss']
})
export class LibrarySearchComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public findAllResponse$: Observable<Response<Library[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	public searchResponse$: Observable<Response<Library[]> | null>;
	public searchIsLoading$: Observable<boolean>;

	public ZListModule: any[] = ZListModule;
	public ZListCategory: any[] = ZListCategory;

	private subscriptors: Subscription[] = [];
	private subscriptorsSearch: Subscription[] = [];
	public dataSearchLibrary: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};

	element: boolean = false;

	constructor(private readonly libraryFacade: LibraryFacade) {
		this.findAllResponse$ = this.libraryFacade.findAllResponse$;
		this.findAllIsLoading$ = this.libraryFacade.findAllIsLoading$;

		this.searchResponse$ = this.libraryFacade.searchResponse$;
		this.searchIsLoading$ = this.libraryFacade.searchIsLoading$;
	}

	ngOnInit(): void {
		this.libraryFacade.findAll(this.pagination);
		this.initFormCreate();
	}

	ngAfterViewInit(): void {
		this.findAll();
		// this.findSearch();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			dataQuery: new FormControl('', []),
			modules: new FormControl('', []),
			category: new FormControl('', [])
		});
	}

	get modules() {
		return this.formCreate.get('modules')!;
	}
	get category() {
		return this.formCreate.get('category')!;
	}
	get dataQuery() {
		return this.formCreate.get('dataQuery')!;
	}

	showData($event: any) {
		$event.preventDefault();
		return (this.element = !this.element);
	}

	findSearch() {
		if (this.modules.value) {
			const dataSearch: SearchLibrary = {
				data: this.dataQuery.value,
				modules: this.modules.value,
				category: this.category.value
			};

			this.libraryFacade.search(dataSearch);

			this.subscriptorsSearch.push(
				this.searchResponse$.subscribe({
					next: (response: Response<Library[]> | null) => {
						if (response != null) {
							let dataResponse: any = [];
							response?.data.forEach((element) => {
								dataResponse.push(element);
							});
							this.dataSearchLibrary = dataResponse;
						}
					}
				})
			);
		} else {
			const dataSearch: search = {
				data: this.dataQuery.value,
				visibility: 'all'
			};

			this.libraryFacade.search(dataSearch);

			this.subscriptorsSearch.push(
				this.searchResponse$.subscribe({
					next: (response: Response<Library[]> | null) => {
						if (response != null) {
							let dataResponse: any = [];
							response?.data.forEach((element) => {
								dataResponse.push(element);
							});
							this.dataSearchLibrary = dataResponse;
						}
					}
				})
			);
		}
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataSearchLibrary = response?.data.filter((data) => {
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

		for (let i = 0; i < this.dataSearchLibrary.length; i++) {
			let departamentLaws = this.dataSearchLibrary[i];

			let nombre = departamentLaws.dttitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(departamentLaws);
			}
		}

		this.dataSearchLibrary = Arr;
		return Arr;
	}

	create() {
		if (this.formCreate.invalid) return;
	}
}
