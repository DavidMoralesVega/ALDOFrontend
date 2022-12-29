import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PussyRoutingModule } from './pussy-routing.module';
import { PussyComponent } from './container/pussy.component';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';

@NgModule({
	declarations: [PussyComponent],
	imports: [CommonModule, PussyRoutingModule, LineZModule]
})
export class PussyModule {}
