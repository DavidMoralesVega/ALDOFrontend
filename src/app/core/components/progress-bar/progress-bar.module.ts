import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZProgressBarComponent } from './container/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	declarations: [ZProgressBarComponent],
	imports: [CommonModule, MatProgressBarModule],
	exports: [ZProgressBarComponent]
})
export class ZProgressBarModule {}
