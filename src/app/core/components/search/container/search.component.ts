import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'z-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class ZSearchComponent implements OnInit {
	@Input() public progress: number = 0;
	constructor() {}

	ngOnInit(): void {}
}
