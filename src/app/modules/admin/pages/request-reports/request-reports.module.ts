import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportsRoutingModule } from './request-reports-routing.module';
import { RequestReportsComponent } from './container/request-reports.component';
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
import { RequestReportsReducer } from './store/request-reports.reducer';
import { RequestReportsEffects } from './store/request-reports.effects';
import { RequestReportsService } from './services/request-reports.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { RequestReportsFacade } from './facades/request-reports.facade';
import { RequestReportsCreateModule } from './components/request-reports-create/request-reports-create.module';
import { RequestReportsUpdateModule } from './components/request-reports-update/request-reports-update.module';

@NgModule({
	declarations: [RequestReportsComponent],
	imports: [
		CommonModule,
		RequestReportsRoutingModule,
		StoreModule.forFeature(ZEffects.requestReports, RequestReportsReducer),
		EffectsModule.forFeature([RequestReportsEffects]),
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
		RequestReportsCreateModule,
		RequestReportsUpdateModule
	],
	providers: [RequestReportsService, MatSnackBarService, RequestReportsFacade],
	exports: [StoreModule, EffectsModule]
})
export class RequestReportsModule {}
