import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallPRoutingModule } from './call-routing.module';
import { CallPComponent } from './container/call.component';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';

@NgModule({
	declarations: [CallPComponent],
	imports: [CommonModule, CallPRoutingModule, CallsModule, NgxPaginationModule, LineZModule],
	providers: [CallFacade]
})
export class CallPModule {}
