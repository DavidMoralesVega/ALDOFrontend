import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZSearchComponent } from './container/search.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	declarations: [ZSearchComponent],
	imports: [CommonModule, MatProgressBarModule],
	exports: [ZSearchComponent]
})
export class ZSearchModule {}
