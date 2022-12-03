import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestReportsRoutingModule } from './request-reports-routing.module';
import { RequestReportsComponent } from './container/request-reports.component';

@NgModule({
	declarations: [RequestReportsComponent],
	imports: [CommonModule, RequestReportsRoutingModule]
})
export class RequestReportsModule {}
