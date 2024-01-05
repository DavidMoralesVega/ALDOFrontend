import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { UploadInputTypeDocumentModule } from 'src/app/core/components/upload-input-type-image/upload-input-type-image.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FileListModule, FileUploadModule } from 'src/app/core/components/file-upload/z';
import { RequestWrittenCreateUpdateComponent } from './container/createUpdate.component';
import { JsonAsyncModule } from 'src/app/core/pipes/json-async/json-async.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
	declarations: [RequestWrittenCreateUpdateComponent],
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
		UploadInputTypeDocumentModule,
		MatDatepickerModule,
		MatNativeDateModule,
		FileListModule,
		FileUploadModule,
		JsonAsyncModule,
		MatAutocompleteModule
	],

	exports: [RequestWrittenCreateUpdateComponent]
})
export class RequestWrittenCreateUpdateModule {}
