import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecognitionRoutingModule } from './recognition-routing.module';
import { RecognitionComponent } from './container/recognition.component';


@NgModule({
  declarations: [
    RecognitionComponent
  ],
  imports: [
    CommonModule,
    RecognitionRoutingModule
  ]
})
export class RecognitionModule { }
