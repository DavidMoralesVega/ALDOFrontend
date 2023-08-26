import { NgModule } from '@angular/core';
import { StaticFilePipe } from './static-file.pipe';

@NgModule({
	declarations: [StaticFilePipe],
	exports: [StaticFilePipe]
})
export class StaticFileNewPipeModule {}
