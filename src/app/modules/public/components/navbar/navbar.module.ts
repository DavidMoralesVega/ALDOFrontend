import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './container/navbar.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MDBBootstrapModulesPro.forRoot()
	],
	exports: [NavbarComponent]
})
export class NavbarModule {}
