import { Component, OnInit } from '@angular/core';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { Call } from 'src/app/modules/admin/pages/calls/entities';
import { ContractFacade } from 'src/app/modules/admin/pages/contract/facades/contract.facade';
import { Contract } from 'src/app/modules/admin/pages/contract/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './Contracts.component.html',
	styleUrls: ['./Contracts.component.scss']
})
export class ContractsComponent implements OnInit {
	public findAllResponse$: Observable<Response<Contract[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public data: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly contractFacade: ContractFacade) {
		this.findAllResponse$ = this.contractFacade.findAllResponse$;
		this.findAllIsLoading$ = this.contractFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.contractFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.data = response?.data.filter((data) => {
						if (data.CTVisibility && data.CTState) {
							return data;
						}
					});
				}
			})
		);
	}

	buscar(termino: string): Contract[] {
		this.findAll();

		let ContractArr: Contract[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.data.length; i++) {
			let contract = this.data[i];

			let nombre = contract.CTTitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				ContractArr.push(contract);
			}
		}

		this.data = ContractArr;
		return ContractArr;
	}
}
