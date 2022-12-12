import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportRegisterRoutingModule } from './requestReportRegister-routing.module';
import { RequestReportRegisterComponent } from './container/requestReportRegister.component';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [RequestReportRegisterComponent],
	imports: [CommonModule, RequestReportRegisterRoutingModule, CallsModule, NgxPaginationModule],
	providers: [CallFacade]
})
export class RequestReportRegisterModule {}
