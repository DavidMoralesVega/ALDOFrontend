import { NgModule } from '@angular/core';
import { JsonAsyncPipe } from './json-async.pipe';

@NgModule({
	declarations: [JsonAsyncPipe],
	exports: [JsonAsyncPipe]
})
export class JsonAsyncModule {}
