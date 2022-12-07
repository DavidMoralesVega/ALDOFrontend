import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationComponent } from './container/publication.component';


@NgModule({
  declarations: [
    PublicationComponent
  ],
  imports: [
    CommonModule,
    PublicationRoutingModule
  ]
})
export class PublicationModule { }
