import { Component, Input } from '@angular/core';

@Component({
	selector: 'z-file-list',
	templateUrl: './file-list.component.html'
})
export class FileListComponent {
	@Input() public isProgress!: boolean;
	@Input() public type!: 'image' | 'document' | 'mp4';
	@Input() public isBtnRemove!: boolean;
	@Input() public files: any[] = [];
}
