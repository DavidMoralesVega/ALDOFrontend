import { Component, Input } from '@angular/core';

@Component({
	selector: 'z-dialog-header',
	templateUrl: './dialog-header.component.html'
})
export class DialogHeaderComponent {
	@Input() public title: string = 'Zephyrus';
}
