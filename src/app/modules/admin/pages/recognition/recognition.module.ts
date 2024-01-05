import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RecognitionRoutingModule } from './recognition-routing.module';
import { RecognitionComponent } from './container/recognition.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities';
import { RecognitionReducer } from './store/recognition.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecognitionEffects } from './store/recognition.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StaticFilePipeModule } from 'src/app/core/pipes/static-file/static-file.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { RecognitionService } from './services/recognition.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { RecognitionFacade } from './facades/recognition.facade';
import { RecognitionCreateUpdateModule } from './components/createUpdate/createUpdate.module';

@NgModule({
	declarations: [RecognitionComponent],
	imports: [
		CommonModule,
		RecognitionRoutingModule,
		DatePipe,
		StoreModule.forFeature(ZEffects.recognition, RecognitionReducer),
		EffectsModule.forFeature([RecognitionEffects]),
		MatSnackBarModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		StaticFilePipeModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		RecognitionCreateUpdateModule
	],
	providers: [RecognitionService, MatSnackBarService, RecognitionFacade],
	exports: [StoreModule, EffectsModule]
})
export class RecognitionModule {}
