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
