import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RequestWrittenRoutingModule } from './request-written-routing.module';
import { RequestWrittenComponent } from './container/request-written.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from '../../../../core/entities/enums/effects.enum';
import { RequestWrittenReducer } from './store/request-written.reducer';
import { RequestWrittenEffects } from './store/request-written.effects';
import { EffectsModule } from '@ngrx/effects';
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
import { RequestWrittenService } from './services/request-written.service';
import { MatSnackBarService } from '../../../../core/services/mat-snack-bar.service';
import { RequestWrittenFacade } from './facades/request-written.facade';
import { LegislatureModule } from '../legislature/legislature.module';
import { LegislatureFacade } from '../legislature/facades/legislature.facade';
import { RequestWrittenCreateUpdateModule } from './components/createUpdate/createUpdate.module';

@NgModule({
	declarations: [RequestWrittenComponent],
	imports: [
		CommonModule,
		RequestWrittenRoutingModule,
		DatePipe,
		StoreModule.forFeature(ZEffects.request_written, RequestWrittenReducer),
		EffectsModule.forFeature([RequestWrittenEffects]),
		MatSnackBarModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		// GET PIPE STATIC FILE
		StaticFilePipeModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		RequestWrittenCreateUpdateModule,
		LegislatureModule
	],
	providers: [RequestWrittenService, MatSnackBarService, RequestWrittenFacade, LegislatureFacade],
	exports: [StoreModule, EffectsModule]
})
export class RequestWrittenModule {}
