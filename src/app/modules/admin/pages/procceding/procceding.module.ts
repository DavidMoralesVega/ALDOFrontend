import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProccedingRoutingModule } from './procceding-routing.module';
import { ProccedingComponent } from './container/procceding.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities';
import { EffectsModule } from '@ngrx/effects';
import { ProccedingEffects } from './store/procceding.effects';
import { ProccedingReducer } from './store/procceding.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { StaticFilePipeModule } from 'src/app/core/pipes/static-file/static-file.module';
import { ProccedingService } from './services/procceding.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { ProccedingFacade } from './facades/procceding.facade';
import { ProccedingCreateUpdateModule } from './components/createUpdate/createUpdate.module';

@NgModule({
	declarations: [ProccedingComponent],
	imports: [
		CommonModule,
		ProccedingRoutingModule,
		StoreModule.forFeature(ZEffects.proceeding, ProccedingReducer),
		EffectsModule.forFeature([ProccedingEffects]),
		MatSnackBarModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		StaticFilePipeModule,
		ProccedingCreateUpdateModule
	],
	providers: [ProccedingService, MatSnackBarService, ProccedingFacade],
	exports: [StoreModule, EffectsModule]
})
export class ProccedingModule {}
