import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentLawRoutingModule } from './departament-law-routing.module';
import { DepartamentLawComponent } from './container/departament-law.component';


@NgModule({
  declarations: [
    DepartamentLawComponent
  ],
  imports: [
    CommonModule,
    DepartamentLawRoutingModule
  ]
})
export class DepartamentLawModule { }
