import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	@Input() title: string = '';
	@Input() content: string = '';
	@Input() backgroundImage: string = 'assets/brand/banner.JPG';

	constructor() {}

	ngOnInit(): void {}
}
