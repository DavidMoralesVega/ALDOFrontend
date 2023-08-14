import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorRoutes } from './administrador.routes';
import { AdministradorComponent } from './container/administrador.component';

const routes: Routes = [
	{
		path: '',
		component: AdministradorComponent,
		children: AdministradorRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdministradorRoutingModule {}
