import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthErpRoutingModule } from './auth-erp-routing.module';
import { AuthErpComponent } from './container/auth-erp.component';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { WavesModule, IconsModule, CardsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { AuthFacade } from '../../facades/auth.facade';

@NgModule({
	declarations: [AuthErpComponent],
	imports: [
		CommonModule,
		AuthErpRoutingModule,
		MatSnackBarModule,

		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		WavesModule,
		IconsModule,
		CardsModule,
		ButtonsModule
	],
	providers: [MatSnackBarService, AuthFacade]
})
export class AuthErpModule {}
