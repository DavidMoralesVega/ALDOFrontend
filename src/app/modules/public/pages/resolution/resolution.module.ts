import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolutionRoutingModule } from './resolution-routing.module';
import { ResolutionComponent } from './container/resolution.component';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResolutionFacade } from 'src/app/modules/admin/pages/resolutions/facades/resolutions.facade';
import { ResolutionsModule } from 'src/app/modules/admin/pages/resolutions/resolutions.module';

@NgModule({
	declarations: [ResolutionComponent],
	imports: [
		CommonModule,
		ResolutionRoutingModule,
		CallsModule,
		NgxPaginationModule,
		ResolutionsModule
	],
	providers: [ResolutionFacade]
})
export class ResolutionPModule {}
