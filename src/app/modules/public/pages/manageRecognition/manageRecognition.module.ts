import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRecognitionRoutingModule } from './manageRecognition-routing.module';
import { ManageRecognitionComponent } from './container/manageRecognition.component';
import { CallFacade } from 'src/app/modules/admin/pages/calls/facades/call.facade';
import { CallsModule } from 'src/app/modules/admin/pages/calls/calls.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [ManageRecognitionComponent],
	imports: [CommonModule, ManageRecognitionRoutingModule, CallsModule, NgxPaginationModule],
	providers: [CallFacade]
})
export class ManageRecognitionModule {}
