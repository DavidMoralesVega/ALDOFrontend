import { Component, OnInit } from '@angular/core';
import { ZListCardCommissions } from 'src/app/core/entities';

@Component({
	selector: 'z-commission',
	templateUrl: './commission.component.html',
	styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions;
	constructor() {}

	ngOnInit(): void {}
}
