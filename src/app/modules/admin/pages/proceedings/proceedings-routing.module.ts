import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceedingsComponent } from './container/proceedings.component';

const routes: Routes = [
	{
		path: '',
		component: ProceedingsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProceedingsRoutingModule {}
