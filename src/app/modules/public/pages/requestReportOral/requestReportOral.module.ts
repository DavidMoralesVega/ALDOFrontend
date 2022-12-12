import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportOralRoutingModule } from './requestReportOral-routing.module';
import { RequestReportOralComponent } from './container/requestReportOral.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RequestReportsFacade } from 'src/app/modules/admin/pages/request-reports/facades/request-reports.facade';
import { RequestReportsModule } from 'src/app/modules/admin/pages/request-reports/request-reports.module';

@NgModule({
	declarations: [RequestReportOralComponent],
	imports: [
		CommonModule,
		RequestReportOralRoutingModule,
		RequestReportsModule,
		NgxPaginationModule
	],
	providers: [RequestReportsFacade]
})
export class RequestReportOralModule {}
