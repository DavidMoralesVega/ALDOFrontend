import { Component, OnInit } from '@angular/core';
import { ZListCardCommissions } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { Call } from 'src/app/modules/admin/pages/calls/entities';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';

@Component({
	selector: 'z-commission',
	templateUrl: './call.component.html',
	styleUrls: ['./call.component.scss']
})
export class CallPComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;

	public findAllResponse$: Observable<Response<Call[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataCall: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly callFacade: CallFacade) {
		this.findAllResponse$ = this.callFacade.findAllResponse$;
		this.findAllIsLoading$ = this.callFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.callFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataCall = response?.data.filter((data) => {
						if (data.CallVisibility === 'Público' && data.call_estado === true) {
							return data;
						}
					});
				}
			})
		);
	}

	filterData(valueToSearch: string): void {
		const QUERY_BY_NAME = {};
	}

	buscarConvocatoria(termino: string): Call[] {
		this.findAll();

		let CallArr: Call[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataCall.length; i++) {
			let call = this.dataCall[i];

			let nombre = call.call_title.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				CallArr.push(call);
			}
		}

		this.dataCall = CallArr;
		// console.log(CallArr);
		return CallArr;
	}
}
