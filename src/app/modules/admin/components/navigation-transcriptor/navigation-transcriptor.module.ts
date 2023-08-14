import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationTranscriptorComponent } from './container/navigation-transcriptor.component';
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
	declarations: [NavigationTranscriptorComponent],
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
	exports: [NavigationTranscriptorComponent]
})
export class NavigationTranscriptorModule {}
