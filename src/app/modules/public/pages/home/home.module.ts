import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';

import { WavesModule, IconsModule, CardsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';
import { PostFacade } from 'src/app/modules/admin/pages/post/facades/post.facade';
import { PostService } from 'src/app/modules/admin/pages/post/services/post.service';
import { PostModule } from '../../../admin/pages/post/post.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		WavesModule,
		IconsModule,
		CardsModule,
		ButtonsModule,
		StaticFilePipeModule,
		PostModule
	],
	providers: [PostFacade, PostService]
})
export class HomeModule {}
