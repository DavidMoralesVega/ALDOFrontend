import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ResolutionsRoutingModule } from './resolutions-routing.module';
import { ResolutionsComponent } from './container/resolutions.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from '../../../../core/entities/enums/effects.enum';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ResolutionsCreateModule } from './components/resolutions-create/resolutions-create.module';
import { ResolutionsUpdateModule } from './components/resolutions-update/resolutions-update.module';
import { MatSnackBarService } from '../../../../core/services/mat-snack-bar.service';
import { ResolutionReducer } from './store/resolutions.reducer';
import { ResolutionEffects } from './store/resolutions.effects';
import { ResolutionService } from './services/resolutions.service';
import { ResolutionFacade } from './facades/resolutions.facade';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';
import { LegislatureModule } from '../legislature/legislature.module';
import { LegislatureFacade } from '../legislature/facades/legislature.facade';
import { DataSetPipeModule } from 'src/app/core/pipes/data-set/data-set.module';
@NgModule({
	declarations: [ResolutionsComponent],
	imports: [
		CommonModule,
		ResolutionsRoutingModule,
		DatePipe,
		StoreModule.forFeature(ZEffects.resolutions, ResolutionReducer),
		EffectsModule.forFeature([ResolutionEffects]),
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
		ResolutionsCreateModule,
		ResolutionsUpdateModule,
		LegislatureModule,
		DataSetPipeModule
	],
	providers: [ResolutionService, MatSnackBarService, ResolutionFacade, LegislatureFacade],
	exports: [StoreModule, EffectsModule]
})
export class ResolutionsModule {}
