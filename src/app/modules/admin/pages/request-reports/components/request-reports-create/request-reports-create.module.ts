import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestReportsCreateComponent } from './container/request-reports-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UploadInputTypeDocumentModule } from 'src/app/core/components/upload-input-type-image/upload-input-type-image.module';
import { MatRadioModule } from '@angular/material/radio';
import { JsonAsyncModule } from 'src/app/core/pipes/json-async/json-async.module';
import { LegislatureModule } from '../../../legislature/legislature.module';

@NgModule({
	declarations: [RequestReportsCreateComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		UploadInputTypeDocumentModule,
		MatRadioModule,
		JsonAsyncModule,
		LegislatureModule
	]
})
export class RequestReportsCreateModule {}
