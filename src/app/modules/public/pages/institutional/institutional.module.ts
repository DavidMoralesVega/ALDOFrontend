import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionalRoutingModule } from './institutional-routing.module';
import { InstitutionalComponent } from './container/institutional.component';


@NgModule({
  declarations: [
    InstitutionalComponent
  ],
  imports: [
    CommonModule,
    InstitutionalRoutingModule
  ]
})
export class InstitutionalModule { }
