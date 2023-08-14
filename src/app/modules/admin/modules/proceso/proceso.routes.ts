import { Routes } from '@angular/router';

export const ProcesoRoutes: Routes = [
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
	}
];
