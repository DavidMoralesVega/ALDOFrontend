import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';

import { WavesModule, IconsModule, CardsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		WavesModule,
		IconsModule,
		CardsModule,
		ButtonsModule,
		NavbarModule,
		FooterModule
	],
	providers: []
})
export class HomeModule {}
