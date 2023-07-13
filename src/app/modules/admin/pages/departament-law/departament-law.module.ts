import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DepartamentLawRoutingModule } from './departament-law-routing.module';
import { DepartamentLawComponent } from './container/departament-law.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from '../../../../core/entities/enums/effects.enum';
import { DepartamentLawReducer } from './store/departament-law.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartamentLawEffects } from './store/departament-law.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DepartamentLawService } from './services/departament-law.service';
import { MatSnackBarService } from '../../../../core/services/mat-snack-bar.service';
import { DepartamentLawFacade } from './facades/departament-law.facade';
import { DepartamentLawCreateModule } from './components/departament-law-create/departament-law-create.module';
import { DepartamentLawUpdateModule } from './components/departament-law-update/departament-law-update.module';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';
import { LegislatureFacade } from '../legislature/facades/legislature.facade';
import { LegislatureModule } from '../legislature/legislature.module';
import { DataSetPipeModule } from 'src/app/core/pipes/data-set/data-set.module';

@NgModule({
	declarations: [DepartamentLawComponent],
	imports: [
		CommonModule,
		DepartamentLawRoutingModule,
		DatePipe,
		StoreModule.forFeature(ZEffects.departament_law, DepartamentLawReducer),
		EffectsModule.forFeature([DepartamentLawEffects]),
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
		DepartamentLawCreateModule,
		DepartamentLawUpdateModule,
		LegislatureModule,
		DataSetPipeModule
	],
	providers: [DepartamentLawService, MatSnackBarService, DepartamentLawFacade, LegislatureFacade],
	exports: [StoreModule, EffectsModule]
})
export class DepartamentLawModule {}
