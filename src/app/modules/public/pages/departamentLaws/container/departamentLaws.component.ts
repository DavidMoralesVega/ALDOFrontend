import { Component, OnInit } from '@angular/core';
import { ZListArea } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import { DepartamentLaw } from 'src/app/modules/admin/pages/departament-law/entities';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from '../../../../../core/shared/default.error-matcher';

@Component({
	selector: 'z-commission',
	templateUrl: './departamentLaws.component.html',
	styleUrls: ['./departamentLaws.component.scss']
})
export class DepartamentLawsComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public findAllResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	public ZListArea: any[] = ZListArea;

	private subscriptors: Subscription[] = [];
	public data: any = [];

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
			departLawArea: new FormControl('', [])
		});
	}
	get departLawArea() {
		return this.formCreate.get('departLawArea')!;
	}

	showData($event: any) {
		$event.preventDefault();
		return (this.element = !this.element);
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.data = response?.data.filter((data) => {
						if (data.DTVisibility === 'Público' && data.DTState === true) {
							return data;
						}
					});
				}
			})
		);
	}

	buscarConvocatoria(termino: string): DepartamentLaw[] {
		this.findAll();

		let Arr: DepartamentLaw[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.data.length; i++) {
			let departamentLaws = this.data[i];

			let nombre = departamentLaws.DTTitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(departamentLaws);
			}
		}

		this.data = Arr;
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
	
	*/
}
