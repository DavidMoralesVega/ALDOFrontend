import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZListCardCommissions } from 'src/app/core/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './commission.component.html',
	styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;
	public zRoute: string = 'Not';
	public zCommission: any;

	constructor(private readonly activatedRoute: ActivatedRoute) {
		this.activatedRoute.params.subscribe({
			next: (data: any) => {
				console.warn('params', data);
				this.zRoute = data.type;
				const filter = ZListCardCommissions.filter((data: any) => data.path === this.zRoute);
				this.zCommission = filter[0];
				console.warn(this.zRoute);
				console.log(this.zCommission);
			}
		});
		// this.zRoute = this.activatedRoute.snapshot.paramMap.get('type')?.trim() || 'Not';
	}

	ngOnInit(): void {}
}
