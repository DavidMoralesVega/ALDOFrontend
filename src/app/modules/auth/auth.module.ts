import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './container/auth.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { AuthService } from './services/auth.service';
import { AuthFacade } from './facades/auth.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from '../../core/entities/enums/effects.enum';
import { AuthReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

@NgModule({
	declarations: [AuthComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MatSnackBarModule,
		StoreModule.forFeature(ZEffects.z_auth, AuthReducer),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [AuthService, MatSnackBarService, AuthFacade],
	exports: [StoreModule, EffectsModule]
})
export class AuthModule {}
