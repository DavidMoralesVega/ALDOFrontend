import { Routes } from '@angular/router';

export const TecnicoSupervisorRoutes: Routes = [
	{
		path: 'archivos',
		loadChildren: () =>
			import('../../pages/file-archive/file-archive.module').then((m) => m.FileArchiveModule)
	}
];
