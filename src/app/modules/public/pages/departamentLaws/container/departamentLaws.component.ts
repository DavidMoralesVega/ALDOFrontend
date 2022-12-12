import { Component, OnInit } from '@angular/core';
import { ZListCardCommissions } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import { DepartamentLaw } from 'src/app/modules/admin/pages/departament-law/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './departamentLaws.component.html',
	styleUrls: ['./departamentLaws.component.scss']
})
export class DepartamentLawsComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;

	public findAllResponse$: Observable<Response<DepartamentLaw[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public data: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly departamentLawFacade: DepartamentLawFacade) {
		this.findAllResponse$ = this.departamentLawFacade.findAllResponse$;
		this.findAllIsLoading$ = this.departamentLawFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.departamentLawFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.data = response?.data.filter((data) => {
						if (data.DTVisibility === 'Público') {
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
}
