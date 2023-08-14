import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptorRoutes } from './transcriptor.routes';
import { TranscriptorComponent } from './container/transcriptor.component';

const routes: Routes = [
	{
		path: '',
		component: TranscriptorComponent,
		children: TranscriptorRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TranscriptorRoutingModule {}
