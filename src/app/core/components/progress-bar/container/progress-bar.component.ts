import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'z-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.scss']
})
export class ZProgressBarComponent implements OnInit {
	@Input() public progress: number = 0;
	constructor() {}

	ngOnInit(): void {}
}
