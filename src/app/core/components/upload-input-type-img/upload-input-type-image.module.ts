import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInputTypeImageComponent } from './container/upload-input-type-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [UploadInputTypeImageComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
	exports: [UploadInputTypeImageComponent]
})
export class UploadInputTypeImageModule {}
