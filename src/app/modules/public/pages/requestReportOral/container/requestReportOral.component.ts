import { Component, OnInit } from '@angular/core';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { RequestReports } from 'src/app/modules/admin/pages/request-reports/entities';
import { RequestReportsFacade } from 'src/app/modules/admin/pages/request-reports/facades/request-reports.facade';

@Component({
	selector: 'z-commission',
	templateUrl: './requestReportOral.component.html'
})
export class RequestReportOralComponent implements OnInit {
	public findAllResponse$: Observable<Response<RequestReports[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataRequestReOral: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly requestReportsFacade: RequestReportsFacade) {
		this.findAllResponse$ = this.requestReportsFacade.findAllResponse$;
		this.findAllIsLoading$ = this.requestReportsFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.requestReportsFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataRequestReOral = response?.data.filter((data) => {
						if (data.reqR_Visibility === 'Público' && data.reqR_state === true) {
							return data;
						}
					});
				}
			})
		);
	}

	buscarConvocatoria(termino: string): RequestReports[] {
		this.findAll();

		let Arr: RequestReports[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataRequestReOral.length; i++) {
			let requestR = this.dataRequestReOral[i];

			let nombre = requestR.reqR_abstract.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(requestR);
			}
		}

		this.dataRequestReOral = Arr;
		return Arr;
	}
}
