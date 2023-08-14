import { NgModule } from '@angular/core';
import { StaticFilesPipe } from './static-file.pipe';

@NgModule({
	declarations: [StaticFilesPipe],
	exports: [StaticFilesPipe]
})
export class StaticFilesPipeModule {}
