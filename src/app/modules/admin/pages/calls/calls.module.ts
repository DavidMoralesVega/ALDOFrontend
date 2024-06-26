import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsComponent } from './container/calls.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ZEffects } from 'src/app/core/entities';
import { CallReducer } from './store/call.reducer';
import { CallEffects } from './store/call.effects';
import { CallService } from './services/call.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { CallFacade } from './facades/call.facade';
import { UploadInputTypeDocumentModule } from 'src/app/core/components/upload-input-type-image/upload-input-type-image.module';
import { StaticFilePipeModule } from 'src/app/core/pipes/static-file/static-file.module';
import { LegislatureModule } from '../legislature/legislature.module';
import { LegislatureFacade } from '../legislature/facades/legislature.facade';
import { DataSetPipeModule } from 'src/app/core/pipes/data-set/data-set.module';
import { CallCreateUpdateModule } from './components/createUpdate/createUpdate.module';

@NgModule({
	declarations: [CallsComponent],
	imports: [
		CommonModule,
		CallsRoutingModule,
		StoreModule.forFeature(ZEffects.call, CallReducer),
		EffectsModule.forFeature([CallEffects]),
		MatSnackBarModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		CallCreateUpdateModule,
		StaticFilePipeModule,
		LegislatureModule,
		DataSetPipeModule
	],
	providers: [CallService, MatSnackBarService, CallFacade, LegislatureFacade],
	exports: [StoreModule, EffectsModule]
})
export class CallsModule {}
