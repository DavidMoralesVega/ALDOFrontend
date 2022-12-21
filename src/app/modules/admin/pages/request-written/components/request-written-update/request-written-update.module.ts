import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestWrittenUpdateComponent } from './container/request-written-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JsonAsyncModule } from '../../../../../../core/pipes/json-async/json-async.module';

@NgModule({
	declarations: [RequestWrittenUpdateComponent],
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
		JsonAsyncModule
	],
	exports: [RequestWrittenUpdateComponent]
})
export class RequestWrittenUpdateModule {}
