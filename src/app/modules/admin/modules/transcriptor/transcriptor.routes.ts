import { Routes } from '@angular/router';

export const TranscriptorRoutes: Routes = [
	{
		path: 'calls',
		loadChildren: () => import('../../pages/calls/calls.module').then((m) => m.CallsModule)
	},
	{
		path: 'resolutions',
		loadChildren: () =>
			import('../../pages/resolutions/resolutions.module').then((m) => m.ResolutionsModule)
	},
	{
		path: 'actas',
		loadChildren: () =>
			import('../../pages/procceding/procceding.module').then((m) => m.ProccedingModule)
	}
];
