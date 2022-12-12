import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolutionRoutingModule } from './resolution-routing.module';
import { ResolutionComponent } from './container/resolution.component';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [ResolutionComponent],
	imports: [CommonModule, ResolutionRoutingModule, CallsModule, NgxPaginationModule],
	providers: [CallFacade]
})
export class ResolutionPModule {}
