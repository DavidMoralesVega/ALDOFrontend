import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProccedingComponent } from './container/procceding.component';

const routes: Routes = [
	{
		path: '',
		component: ProccedingComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProccedingRoutingModule {}
