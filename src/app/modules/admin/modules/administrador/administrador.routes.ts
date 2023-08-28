import { Routes } from '@angular/router';

export const AdministradorRoutes: Routes = [
	{
		path: 'calls',
		loadChildren: () => import('../../pages/calls/calls.module').then((m) => m.CallsModule)
	},
	{
		path: 'category',
		loadChildren: () =>
			import('../../pages/category/category.module').then((m) => m.CategoryModule)
	},
	{
		path: 'contract',
		loadChildren: () =>
			import('../../pages/contract/contract.module').then((m) => m.ContractModule)
	},
	{
		path: 'departament-law',
		loadChildren: () =>
			import('../../pages/departament-law/departament-law.module').then(
				(m) => m.DepartamentLawModule
			)
	},
	{
		path: 'departament-law-search',
		loadChildren: () =>
			import('../../pages/departament-law-search/departament-law-search.module').then(
				(m) => m.DepartamentLawsSearchModule
			)
	},
	{
		path: 'post',
		loadChildren: () => import('../../pages/post/post.module').then((m) => m.PostModule)
	},
	{
		path: 'recognition',
		loadChildren: () =>
			import('../../pages/recognition/recognition.module').then((m) => m.RecognitionModule)
	},
	{
		path: 'request-reports',
		loadChildren: () =>
			import('../../pages/request-reports/request-reports.module').then(
				(m) => m.RequestReportsModule
			)
	},
	{
		path: 'request-written',
		loadChildren: () =>
			import('../../pages/request-written/request-written.module').then(
				(m) => m.RequestWrittenModule
			)
	},
	{
		path: 'resolutions',
		loadChildren: () =>
			import('../../pages/resolutions/resolutions.module').then((m) => m.ResolutionsModule)
	},
	{
		path: 'user',
		loadChildren: () => import('../../pages/user/user.module').then((m) => m.UserModule)
	},
	{
		path: 'biblioteca',
		loadChildren: () => import('../../pages/library/library.module').then((m) => m.LibraryModule)
	},
	{
		path: 'search-biblioteca',
		loadChildren: () =>
			import('../../pages/library-search/library-search.module').then(
				(m) => m.LibrarySearchModule
			)
	},
	{
		path: 'legislature',
		loadChildren: () =>
			import('../../pages/legislature/legislature.module').then((m) => m.LegislatureModule)
	},
	{
		path: 'archivos',
		loadChildren: () =>
			import('../../pages/file-archive/file-archive.module').then((m) => m.FileArchiveModule)
	},
	{
		path: 'actas',
		loadChildren: () =>
			import('../../pages/procceding/procceding.module').then((m) => m.ProccedingModule)
	}
];
