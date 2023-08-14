import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTecnicoSupervisorComponent } from './container/navigation-tecnico-supervisor.component';
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
	declarations: [NavigationTecnicoSupervisorComponent],
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
	],
	exports: [NavigationTecnicoSupervisorComponent]
})
export class NavigationTecnicoSupervisorModule {}
