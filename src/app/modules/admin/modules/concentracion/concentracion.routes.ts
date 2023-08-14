import { Routes } from '@angular/router';

export const ConcentracionRoutes: Routes = [
	{
		path: 'contract',
		loadChildren: () =>
			import('../../pages/contract/contract.module').then((m) => m.ContractModule)
	}
];
