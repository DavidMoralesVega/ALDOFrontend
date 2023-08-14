import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesoRoutes } from './proceso.routes';
import { ProcesoComponent } from './container/proceso.component';

const routes: Routes = [
	{
		path: '',
		component: ProcesoComponent,
		children: ProcesoRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProcesoRoutingModule {}
