import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceedingsCreateComponent } from './container/proceedings-create.component';



@NgModule({
  declarations: [
    ProceedingsCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProceedingsCreateComponent
  ]
})
export class ProceedingsCreateModule { }
