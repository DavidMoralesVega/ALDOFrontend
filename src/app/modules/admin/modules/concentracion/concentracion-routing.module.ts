import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcentracionRoutes } from './concentracion.routes';
import { ConcentracionComponent } from './container/concentracion.component';

const routes: Routes = [
	{
		path: '',
		component: ConcentracionComponent,
		children: ConcentracionRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConcentracionRoutingModule {}
