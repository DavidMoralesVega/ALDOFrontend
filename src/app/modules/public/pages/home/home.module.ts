import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';

import { WavesModule, IconsModule, CardsModule, ButtonsModule } from 'ng-uikit-pro-standard';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, WavesModule, IconsModule, CardsModule, ButtonsModule],
	providers: []
})
export class HomeModule {}
