import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommissionRoutingModule } from './commission-routing.module';
import { CommissionComponent } from './container/commission.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
	declarations: [CommissionComponent],
	imports: [CommonModule, CommissionRoutingModule, NgOptimizedImage]
})
export class CommissionModule {}
