import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportRegisterRoutingModule } from './requestReportRegister-routing.module';
import { RequestReportRegisterComponent } from './container/requestReportRegister.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RequestWrittenFacade } from 'src/app/modules/admin/pages/request-written/facades/request-written.facade';
import { RequestWrittenModule } from 'src/app/modules/admin/pages/request-written/request-written.module';

@NgModule({
	declarations: [RequestReportRegisterComponent],
	imports: [
		CommonModule,
		RequestReportRegisterRoutingModule,
		RequestWrittenModule,
		NgxPaginationModule
	],
	providers: [RequestWrittenFacade]
})
export class RequestReportRegisterModule {}
