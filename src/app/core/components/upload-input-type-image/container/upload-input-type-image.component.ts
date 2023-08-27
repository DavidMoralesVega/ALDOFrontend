import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBarService } from '../../../services/mat-snack-bar.service';

@Component({
	selector: 'z-upload-input-type-document',
	templateUrl: './upload-input-type-image.component.html'
})
export class UploadInputTypeDocumentComponent implements OnInit {
	@Output()
	public onUpload = new EventEmitter<any>();

	public imagePreview: string = 'assets/brand/placeholder-avatar.webp';
	public imageName: string = 'Archivo no seleccionado';
	public isImage!: boolean;

	private isValidImage: boolean = false;

	constructor(private readonly matSnackBarService: MatSnackBarService) {}

	ngOnInit(): void {}

	public onFileChange(event: any): void {
		if (event.target.files && event.target.files[0]) {
			// Check file type
			const file = event.target.files[0];
			const fileType = file['type'];
			const validImageTypes = ['image/jpeg', 'image/png', 'application/pdf'];
			const fileSize = file['size'];
			const maxSize = 30 * 1024 * 1024;
			this.isImage = validImageTypes.includes(fileType);

			if (!this.isImage) {
				this.matSnackBarService.open('warning', 'Selecciona una imagen para subirla');
				this.isValidImage = false;
				this.imageName = 'Archivo no seleccionado';
			} else if (fileSize > maxSize) {
				this.matSnackBarService.open('warning', 'La imagen no puede ser mayor a 2 MB');
				this.isValidImage = false;
				this.imageName = 'Archivo no seleccionado';
			} else {
				// Show preview
				const reader = new FileReader();
				reader.onload = (e: any) => (this.imagePreview = e.target.result);
				reader.readAsDataURL(file);

				// Get file name
				this.imageName = file.name;
				this.isValidImage = true;
			}

			this.onUpload.emit({
				file,
				isValidImage: this.isValidImage
			});
		}
	}
}
