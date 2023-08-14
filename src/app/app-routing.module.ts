import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
	},
	{
		path: 'administrador-blog',
		loadChildren: () =>
			import('./modules/admin/modules/administrador-blog/administrador-blog.module').then(
				(m) => m.AdministradorBlogModule
			)
	},
	{
		path: 'encargado-area-proceso',
		loadChildren: () =>
			import('./modules/admin/modules/proceso/proceso.module').then((m) => m.ProcesoModule)
	},
	{
		path: 'transcriptor',
		loadChildren: () =>
			import('./modules/admin/modules/transcriptor/transcriptor.module').then(
				(m) => m.TranscriptorModule
			)
	},
	{
		path: 'juridicos-administrativos',
		loadChildren: () =>
			import(
				'./modules/admin/modules/juridicos-administrativos/juridicos-administrativos.module'
			).then((m) => m.JuridicosAdministrativosModule)
	},
	{
		path: 'encargado-area-concentracion',
		loadChildren: () =>
			import('./modules/admin/modules/concentracion/concentracion.module').then(
				(m) => m.ConcentracionModule
			)
	},
	{
		path: 'tecnico-supervisor',
		loadChildren: () =>
			import('./modules/admin/modules/tecnico-supervisor/tecnico-supervisor.module').then(
				(m) => m.TecnicoSupervisorModule
			)
	},
	{
		path: 'administrador',
		loadChildren: () =>
			import('./modules/admin/modules/administrador/administrador.module').then(
				(m) => m.AdministradorModule
			)
	},
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [
		// QuicklinkModule,
		RouterModule.forRoot(routes, {
			// preloadingStrategy: QuicklinkStrategy,
			scrollPositionRestoration: 'enabled',
			initialNavigation: 'enabledBlocking',
			useHash: true
		})
	],
	exports: [
		RouterModule
		// QuicklinkModule
	]
})
export class AppRoutingModule {}
