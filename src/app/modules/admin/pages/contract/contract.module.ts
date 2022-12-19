import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './container/contract.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities';
import { EffectsModule } from '@ngrx/effects';
import { ResolutionReducer } from '../resolutions/store/resolutions.reducer';
import { ResolutionEffects } from '../resolutions/store/resolutions.effects';
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
import { ContractUpdateModule } from './components/contract-update/contract-update.module';
import { ContractCreateModule } from './components/contract-create/contract-create.module';

import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';

import { ContractFacade } from './facades/contract.facade';
import { ContractService } from './services/contract.service';
import { ContractEffects } from './store/contract.effects';
import { ContractReducer } from './store/contract.reducer';

@NgModule({
	declarations: [ContractComponent],
	imports: [
		CommonModule,
		ContractRoutingModule,
		DatePipe,

		StoreModule.forFeature(ZEffects.contract, ContractReducer),
		EffectsModule.forFeature([ContractEffects]),
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

		ContractCreateModule,
		ContractUpdateModule
	],
	providers: [ContractService, MatSnackBarService, ContractFacade],
	exports: [StoreModule, EffectsModule]
})
export class ContractModule {}
