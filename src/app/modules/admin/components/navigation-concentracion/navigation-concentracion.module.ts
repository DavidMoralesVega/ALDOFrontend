import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationConcentracionComponent } from './container/navigation-concentracion.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
	SidenavModule,
	WavesModule,
	AccordionModule,
	IconsModule,
	NavbarModule
} from 'ng-uikit-pro-standard';

@NgModule({
	declarations: [NavigationConcentracionComponent],
	imports: [
		CommonModule,
		RouterModule,
		SidenavModule,
		WavesModule,
		AccordionModule,
		MatIconModule,
		MatButtonModule,
		IconsModule,
		NavbarModule,
		MatMenuModule

		// MDBBootstrapModulesPro.forRoot()
	],
	exports: [NavigationConcentracionComponent]
})
export class NavigationConcentracionModule {}
