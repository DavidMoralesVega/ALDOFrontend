import { Component, OnInit } from '@angular/core';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { Call } from 'src/app/modules/admin/pages/calls/entities';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { RequestWritten } from 'src/app/modules/admin/pages/request-written/entities';
import { RequestWrittenFacade } from 'src/app/modules/admin/pages/request-written/facades/request-written.facade';

@Component({
	selector: 'z-commission',
	templateUrl: './requestReportRegister.component.html'
})
export class RequestReportRegisterComponent implements OnInit {
	public findAllResponse$: Observable<Response<RequestWritten[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataReportReg: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly requestWrittenFacade: RequestWrittenFacade) {
		this.findAllResponse$ = this.requestWrittenFacade.findAllResponse$;
		this.findAllIsLoading$ = this.requestWrittenFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.requestWrittenFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataReportReg = response?.data.filter((data) => {
						if (data.RWVisibility === 'Público' && data.RWState) {
							return data;
						}
					});
				}
			})
		);
	}

	buscar(termino: string): RequestWritten[] {
		this.findAll();

		let Arr: RequestWritten[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataReportReg.length; i++) {
			let requestReportReg = this.dataReportReg[i];

			let nombre = requestReportReg.RWTitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(requestReportReg);
			}
		}

		this.dataReportReg = Arr;
		return Arr;
	}
}
