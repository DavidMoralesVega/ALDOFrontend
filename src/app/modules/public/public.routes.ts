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
		path: 'convocatorias',
		loadChildren: () => import('./pages/call/call.module').then((m) => m.CallPModule)
	},
	{
		path: 'contracts',
		loadChildren: () =>
			import('./pages/Contracts/Contracts.module').then((m) => m.ContractsModule)
	},
	{
		path: 'departamentLaws',
		loadChildren: () =>
			import('./pages/departamentLaws/departamentLaws.module').then(
				(m) => m.DepartamentLawsModule
			)
	},
	{
		path: 'manageRecognition',
		loadChildren: () =>
			import('./pages/manageRecognition/manageRecognition.module').then(
				(m) => m.ManageRecognitionModule
			)
	},
	{
		path: 'requestReportOral',
		loadChildren: () =>
			import('./pages/requestReportOral/requestReportOral.module').then(
				(m) => m.RequestReportOralModule
			)
	},
	{
		path: 'requestReportRegsiter',
		loadChildren: () =>
			import('./pages/requestReportRegister/requestReportRegister.module').then(
				(m) => m.RequestReportRegisterModule
			)
	},
	{
		path: 'resolution',
		loadChildren: () =>
			import('./pages/resolution/resolution.module').then((m) => m.ResolutionPModule)
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
