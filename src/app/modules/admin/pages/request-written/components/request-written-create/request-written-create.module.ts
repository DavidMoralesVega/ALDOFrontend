import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestWrittenCreateComponent } from './container/request-written-create.component';
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
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { JsonAsyncModule } from '../../../../../../core/pipes/json-async/json-async.module';

@NgModule({
	declarations: [RequestWrittenCreateComponent],
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
		// upload file
		UploadInputTypeDocumentModule,
		MatDatepickerModule,
		MatNativeDateModule,
		JsonAsyncModule,
		MatOptionModule
	]
})
export class RequestWrittenCreateModule {}
