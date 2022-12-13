import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
	{
		path: 'calls',
		loadChildren: () => import('./pages/calls/calls.module').then((m) => m.CallsModule)
	},
	{
		path: 'category',
		loadChildren: () => import('./pages/category/category.module').then((m) => m.CategoryModule)
	},
	{
		path: 'contract',
		loadChildren: () => import('./pages/contract/contract.module').then((m) => m.ContractModule)
	},
	{
		path: 'departament-law',
		loadChildren: () =>
			import('./pages/departament-law/departament-law.module').then(
				(m) => m.DepartamentLawModule
			)
	},
	{
		path: 'post',
		loadChildren: () => import('./pages/post/post.module').then((m) => m.PostModule)
	},
	{
		path: 'recognition',
		loadChildren: () =>
			import('./pages/recognition/recognition.module').then((m) => m.RecognitionModule)
	},
	{
		path: 'request-reports',
		loadChildren: () =>
			import('./pages/request-reports/request-reports.module').then(
				(m) => m.RequestReportsModule
			)
	},
	{
		path: 'request-written',
		loadChildren: () =>
			import('./pages/request-written/request-written.module').then(
				(m) => m.RequestWrittenModule
			)
	},
	{
		path: 'resolutions',
		loadChildren: () =>
			import('./pages/resolutions/resolutions.module').then((m) => m.ResolutionsModule)
	},
	{
		path: 'user',
		loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
	},
	{
		path: 'biblioteca',
		loadChildren: () => import('./pages/library/library.module').then((m) => m.LibraryModule)
	}
];
