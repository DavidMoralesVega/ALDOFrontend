import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegislatureRoutingModule } from './legislature-routing.module';
import { LegislatureComponent } from './container/legislature.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ZEffects } from 'src/app/core/entities';
import { LegislatureReducer } from './store/legislature.reducer';
import { LegislatureEffects } from './store/legislature.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { LegislatureService } from './services/legislature.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LegislatureFacade } from './facades/legislature.facade';
import { LegislatureCreateModule } from './components/legislature-create/legislature-create.module';
import { LegislatureUpdateModule } from './components/legislature-update/legislature-update.module';

@NgModule({
	declarations: [LegislatureComponent],
	imports: [
		CommonModule,
		LegislatureRoutingModule,
		StoreModule.forFeature(ZEffects.legislature, LegislatureReducer),
		EffectsModule.forFeature([LegislatureEffects]),
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
		LegislatureCreateModule,
		LegislatureUpdateModule
	],
	providers: [LegislatureService, MatSnackBarService, LegislatureFacade],
	exports: [StoreModule, EffectsModule]
})
export class LegislatureModule {}
