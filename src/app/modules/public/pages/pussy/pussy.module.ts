import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PussyRoutingModule } from './pussy-routing.module';
import { PussyComponent } from './container/pussy.component';


@NgModule({
  declarations: [
    PussyComponent
  ],
  imports: [
    CommonModule,
    PussyRoutingModule
  ]
})
export class PussyModule { }
