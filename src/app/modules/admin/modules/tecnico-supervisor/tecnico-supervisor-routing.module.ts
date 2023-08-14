import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoSupervisorRoutes } from './tecnico-supervisor.routes';
import { TecnicoSupervisorComponent } from './container/tecnico-supervisor.component';

const routes: Routes = [
	{
		path: '',
		component: TecnicoSupervisorComponent,
		children: TecnicoSupervisorRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TecnicoSupervisorRoutingModule {}
