import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInputTypeDocumentComponent } from './container/upload-input-type-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [UploadInputTypeDocumentComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
	exports: [UploadInputTypeDocumentComponent]
})
export class UploadInputTypeDocumentModule {}
