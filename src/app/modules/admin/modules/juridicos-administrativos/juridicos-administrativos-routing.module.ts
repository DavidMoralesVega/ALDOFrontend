import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuridicosAdminsitrativosRoutes } from './juridicos-administrativos.routes';
import { JuridicosAdministrativosComponent } from './container/juridicos-administrativos.component';

const routes: Routes = [
	{
		path: '',
		component: JuridicosAdministrativosComponent,
		children: JuridicosAdminsitrativosRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JuridicosAdminsitrativosRoutingModule {}
