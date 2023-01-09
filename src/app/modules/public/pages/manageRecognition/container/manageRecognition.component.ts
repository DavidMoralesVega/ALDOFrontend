import { Component, OnInit } from '@angular/core';
import { ZListCardCommissions } from 'src/app/core/entities';
import { Pagination, Response } from 'src/app/core/entities';
import { Observable, Subscription } from 'rxjs';
import { RecognitionFacade } from 'src/app/modules/admin/pages/recognition/facades/recognition.facade';
import { Recognition } from 'src/app/modules/admin/pages/recognition/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './manageRecognition.component.html',
	styleUrls: ['./manageRecognition.component.scss']
})
export class ManageRecognitionComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;

	public findAllResponse$: Observable<Response<Recognition[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataManageReg: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly recognitionFacade: RecognitionFacade) {
		this.findAllResponse$ = this.recognitionFacade.findAllResponse$;
		this.findAllIsLoading$ = this.recognitionFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.recognitionFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataManageReg = response?.data.filter((data) => {
						if (data.RVisibility === 'Público' && data.RState === true) {
							return data;
						}
					});
				}
			})
		);
	}

	buscar(termino: string): Recognition[] {
		this.findAll();

		let Arr: Recognition[] = [];
		termino = termino.toLowerCase();

		for (let i = 0; i < this.dataManageReg.length; i++) {
			let manageReg = this.dataManageReg[i];

			let nombre = manageReg.RTitle.toLowerCase();

			if (nombre.indexOf(termino) >= 0) {
				Arr.push(manageReg);
			}
		}

		this.dataManageReg = Arr;
		return Arr;
	}
}
