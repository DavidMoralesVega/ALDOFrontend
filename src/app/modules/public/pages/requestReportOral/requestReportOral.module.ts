import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportOralRoutingModule } from './requestReportOral-routing.module';
import { RequestReportOralComponent } from './container/requestReportOral.component';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [RequestReportOralComponent],
	imports: [CommonModule, RequestReportOralRoutingModule, CallsModule, NgxPaginationModule],
	providers: [CallFacade]
})
export class RequestReportOralModule {}
