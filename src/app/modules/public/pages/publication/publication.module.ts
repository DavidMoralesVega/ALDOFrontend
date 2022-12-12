import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationComponent } from './container/publication.component';
import { PostFacade } from 'src/app/modules/admin/pages/post/facades/post.facade';
import { PostModule } from 'src/app/modules/admin/pages/post/post.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [PublicationComponent],
	imports: [CommonModule, PublicationRoutingModule, PostModule, NgxPaginationModule],
	providers: [PostFacade]
})
export class PublicationModule {}
