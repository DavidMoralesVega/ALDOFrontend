import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { AuthUserComponent } from './container/auth-user.component';
import { ButtonsModule, CardsModule, IconsModule, WavesModule } from 'ng-uikit-pro-standard';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { AuthFacade } from '../../facades/auth.facade';
import { NavbarModule } from '../../../public/components/navbar/navbar.module';

@NgModule({
	declarations: [AuthUserComponent],
	imports: [
		CommonModule,
		AuthUserRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		WavesModule,
		IconsModule,
		CardsModule,
		ButtonsModule,

		MatSnackBarModule,
		NavbarModule
	],
	providers: [MatSnackBarService, AuthFacade]
})
export class AuthUserModule {}
