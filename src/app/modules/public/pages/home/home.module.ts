import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';

import {
	WavesModule,
	IconsModule,
	CardsModule,
	ButtonsModule,
	MDBBootstrapModulesPro
} from 'ng-uikit-pro-standard';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';
import { PostFacade } from 'src/app/modules/admin/pages/post/facades/post.facade';
import { PostService } from 'src/app/modules/admin/pages/post/services/post.service';
import { PostModule } from '../../../admin/pages/post/post.module';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';
import { StaticFileNewPipeModule } from 'src/app/core/pipes/static-file-new/static-file.module';

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
		PostModule,
		LineZModule,
		StaticFileNewPipeModule,
		MDBBootstrapModulesPro.forRoot()
	],
	providers: [PostFacade, PostService]
})
export class HomeModule {}
