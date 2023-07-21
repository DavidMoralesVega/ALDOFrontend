import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileArchiveUpdateComponent } from './container/file-archive-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { JsonAsyncModule } from 'src/app/core/pipes/json-async/json-async.module';
import { UploadInputTypeDocumentModule } from 'src/app/core/components/upload-input-type-image/upload-input-type-image.module';

@NgModule({
	declarations: [FileArchiveUpdateComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		//fecha
		MatDatepickerModule,
		MatNativeDateModule,
		JsonAsyncModule,
		UploadInputTypeDocumentModule
	],
	exports: [FileArchiveUpdateComponent]
})
export class FileArchiveUpdateModule {}
