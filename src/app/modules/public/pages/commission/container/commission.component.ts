import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IZPathCard, ZListCardCommissions } from 'src/app/core/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './commission.component.html'
})
export class CommissionComponent {
	public ZListCardCommissions: IZPathCard[] = ZListCardCommissions;
	public zRoute: string = 'Not';
	public zCommission!: IZPathCard;

	constructor(private readonly activatedRoute: ActivatedRoute) {
		this.activatedRoute.params.subscribe({
			next: (data: Params[string]) => {
				this.zRoute = data.type;
				const filter = ZListCardCommissions.filter(
					(data: IZPathCard) => data.path === this.zRoute
				);
				this.zCommission = filter[0];
			},
			error: (error) => {
				console.error(error);
			}
		});
	}
}
