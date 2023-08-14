import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorBlogRoutes } from './administrador-blog.routes';
import { AdministradorBlogComponent } from './container/administrador-blog.component';

const routes: Routes = [
	{
		path: '',
		component: AdministradorBlogComponent,
		children: AdministradorBlogRoutes
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdministradoBlogRoutingModule {}
