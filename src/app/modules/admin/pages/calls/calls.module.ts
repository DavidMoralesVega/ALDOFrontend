import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsComponent } from './container/calls.component';


@NgModule({
  declarations: [
    CallsComponent
  ],
  imports: [
    CommonModule,
    CallsRoutingModule
  ]
})
export class CallsModule { }
