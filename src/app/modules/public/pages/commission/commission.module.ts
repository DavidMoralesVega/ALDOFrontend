import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommissionRoutingModule } from './commission-routing.module';
import { CommissionComponent } from './container/commission.component';
import { NgOptimizedImage } from '@angular/common';
import { LineZModule } from 'src/app/core/components/line-z/line-z.module';

@NgModule({
	declarations: [CommissionComponent],
	imports: [CommonModule, CommissionRoutingModule, NgOptimizedImage, LineZModule]
})
export class CommissionModule {}
