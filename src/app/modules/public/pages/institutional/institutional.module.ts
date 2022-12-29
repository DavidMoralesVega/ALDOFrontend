import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionalRoutingModule } from './institutional-routing.module';
import { InstitutionalComponent } from './container/institutional.component';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';

@NgModule({
	declarations: [InstitutionalComponent],
	imports: [CommonModule, InstitutionalRoutingModule, LineZModule]
})
export class InstitutionalModule {}
