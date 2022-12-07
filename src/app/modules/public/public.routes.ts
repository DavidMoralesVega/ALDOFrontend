import { Routes } from '@angular/router';

export const PublicRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'inicio',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
	},

	{
		path: 'comisiones',
		loadChildren: () =>
			import('./pages/commission/commission.module').then((m) => m.CommissionModule)
	},
	{
		path: 'publicaciones',
		loadChildren: () =>
			import('./pages/publication/publication.module').then((m) => m.PublicationModule)
	},
	{
		path: 'gaceta',
		loadChildren: () => import('./pages/pussy/pussy.module').then((m) => m.PussyModule)
	}
];
