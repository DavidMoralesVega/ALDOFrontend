import { NgModule } from '@angular/core';
import { DataSetPipe } from './data-set.pipe';

@NgModule({
	declarations: [DataSetPipe],
	exports: [DataSetPipe]
})
export class DataSetPipeModule {}
