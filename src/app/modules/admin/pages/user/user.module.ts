import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './container/user.component';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ZEffects } from '../../../../core/entities/enums/effects.enum';
import { UserReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { UserService } from './services/user.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { UserFacade } from './facades/user.facade';
import { UserCreateModule } from './components/user-create/user-create.module';
import { UserUpdateModule } from './components/user-update/user-update.module';
import { DataSetPipeModule } from 'src/app/core/pipes/data-set/data-set.module';

@NgModule({
	declarations: [UserComponent],
	imports: [
		CommonModule,
		UserRoutingModule,
		StoreModule.forFeature(ZEffects.user, UserReducer),
		EffectsModule.forFeature([UserEffects]),
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
		UserCreateModule,
		UserUpdateModule,
		DataSetPipeModule
	],
	providers: [UserService, MatSnackBarService, UserFacade],
	exports: [StoreModule, EffectsModule]
})
export class UserModule {}
