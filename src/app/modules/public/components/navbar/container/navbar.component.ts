import { Component, OnInit } from '@angular/core';
import { ZListCardCommissions } from 'src/app/core/entities';

@Component({
	selector: 'z-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public ZListCardCommissions: any[] = ZListCardCommissions.slice(1);

	constructor() {}

	ngOnInit(): void {}
}
