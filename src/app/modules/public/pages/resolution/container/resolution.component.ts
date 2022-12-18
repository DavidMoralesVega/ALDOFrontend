import { Component, OnInit } from '@angular/core';
import { Pagination, Response, ZListCardCommissions } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { Call } from 'src/app/modules/admin/pages/calls/entities';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { ResolutionFacade } from 'src/app/modules/admin/pages/resolutions/facades/resolutions.facade';
import { Resolution } from 'src/app/modules/admin/pages/resolutions/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './resolution.component.html',
	styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;

	public findAllResponse$: Observable<Response<Resolution[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataResolution: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly resolutionFacade: ResolutionFacade) {
		this.findAllResponse$ = this.resolutionFacade.findAllResponse$;
		this.findAllIsLoading$ = this.resolutionFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.resolutionFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataResolution = response?.data.filter((data) => {
						if (data.REVisibility === 'Público' && data.REState === true) {
							return data;
						}
					});
				}
			})
		);
	}

	buscar(termino: string): Call[] {
		this.findAll();

		let Arr: Call[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataResolution.length; i++) {
			let call = this.dataResolution[i];

			let nombre = call.RETitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(call);
			}
		}

		this.dataResolution = Arr;
		// console.log(Arr);
		return Arr;
	}
}
