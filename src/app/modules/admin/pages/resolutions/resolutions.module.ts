import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolutionsRoutingModule } from './resolutions-routing.module';
import { ResolutionsComponent } from './container/resolutions.component';


@NgModule({
  declarations: [
    ResolutionsComponent
  ],
  imports: [
    CommonModule,
    ResolutionsRoutingModule
  ]
})
export class ResolutionsModule { }
