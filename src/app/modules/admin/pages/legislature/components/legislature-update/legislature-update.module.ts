import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegislatureUpdateComponent } from './container/legislature-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	declarations: [LegislatureUpdateComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule
	],
	exports: [LegislatureUpdateComponent]
})
export class LegislatureUpdateModule {}
