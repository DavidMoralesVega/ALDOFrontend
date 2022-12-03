import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestWrittenRoutingModule } from './request-written-routing.module';
import { RequestWrittenComponent } from './container/request-written.component';

@NgModule({
	declarations: [RequestWrittenComponent],
	imports: [CommonModule, RequestWrittenRoutingModule]
})
export class RequestWrittenModule {}
