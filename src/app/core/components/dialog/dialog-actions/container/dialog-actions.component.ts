import { Component, Input } from '@angular/core';

@Component({
	selector: 'z-dialog-actions',
	templateUrl: './dialog-actions.component.html'
})
export class DialogActionsComponent {
	@Input() public isLoading!: boolean;
	@Input() public isDisabled!: boolean;
	@Input() public textButton?: string = 'Guardar';
}
