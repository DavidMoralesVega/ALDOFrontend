import { IZPath } from '../interfaces/path.interface';

const ZPath_ADMIN = '/admin';

export const ZPaths: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'adsi',
		icon: 'tachometer-alt',
		children: [
			{ module: 'contract', path: `${ZPath_ADMIN}/contract`, name: 'Contratos', icon: 'bell' },
			{ module: 'calls', path: `${ZPath_ADMIN}/calls`, name: 'Convocatorias', icon: 'bell' },
			{
				module: 'departament-law',
				path: `${ZPath_ADMIN}/departament-law`,
				name: 'departament-law',
				icon: 'bell'
			},
			{
				module: 'recognition',
				path: `${ZPath_ADMIN}/recognition`,
				name: 'Reconocimientos',
				icon: 'bell'
			},
			{
				module: 'request-reports',
				path: `${ZPath_ADMIN}/request-reports`,
				name: 'Petición de informe oral',
				icon: 'bell'
			},
			{
				module: 'request-written',
				path: `${ZPath_ADMIN}/request-written`,
				name: 'Petición de informe inscrito',
				icon: 'bell'
			},
			{
				module: 'resolutions',
				path: `${ZPath_ADMIN}/resolutions`,
				name: 'resolutions',
				icon: 'bell'
			},
			{ module: 'user', path: `${ZPath_ADMIN}/user`, name: 'user', icon: 'bell' }
		]
	}
	// {
	// 	module: 'sareh',
	// 	collase: true,
	// 	icon: 'tachometer-alt',
	// 	name: 'sareh',
	// 	children: [
	// 		{
	// 			module: 'adm_erp',
	// 			path: `${ZPath_SAREH}/erp`,
	// 			name: 'erp',
	// 			icon: 'bell'
	// 		},
	// 		{
	// 			module: 'adm_usuario',
	// 			path: `${ZPath_SAREH}/usuario`,
	// 			name: 'usuario',
	// 			icon: 'bell'
	// 		},
	// 		{
	// 			module: 'kam-persona',
	// 			path: `${ZPath_SAREH}/persona`,
	// 			name: 'persona',
	// 			icon: 'bell'
	// 		},

	// 		{
	// 			module: 'subcentro',
	// 			path: `${ZPath_SAREH}/subcentro`,
	// 			name: 'subcentro',
	// 			icon: 'bell'
	// 		}
	// 	]
	// },
	// {
	// 	module: 'hola',
	// 	collase: false,
	// 	icon: 'tachometer-alt',
	// 	name: 'hola',
	// 	path: 'sareh'
	// }
];

export interface FlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

export const ZMessages = {
	success: 'Exitoso',
	error: 'Error en el servidor'
};

export const routeNames = {
	login: 'Login',
	home: 'Inicio'
};

export const OptionSidenavClient: any = [{ Icon: 'note_alt', Route: 'reserva', Label: 'Reservas' }];

export const OptionSidenavAdmin: any = [
	{ Icon: 'group', Route: 'usuario', Label: 'Usuarios' },
	{ Icon: 'bookmarks', Route: 'categoria', Label: 'Categorias' },
	{ Icon: 'newspaper', Route: 'noticia', Label: 'Noticias' }
];

export const ZListRegion = [
	'Centro Europa',
	'Sud America',
	'Oceania',
	'Norte Europa',
	'Europa Septentrional',
	'Península Ibérica',
	'Norte America',
	'Sur Asia',
	'Este de Asia',
	'Polonia',
	'Europa Meridional'
];

export const ZListOrigin: any = ['BE', 'CB', 'CH', 'LP', 'OR', 'PD', 'PT', 'SC', 'TJ'];

export const ZListContinent = ['Europa', 'America', 'Oceania', 'Norte Europa', 'Asia'];
export const ZListTypeDocument = ['CI', 'RUN', 'RNI'];
export const ZListSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
export const ZListBoot = [
	'34',
	'35',
	'36',
	'37',
	'38',
	'39',
	'40',
	'41',
	'42',
	'43',
	'44',
	'45',
	'46',
	'47',
	'48',
	'49',
	'50'
];
export const ZListTypeBlood = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const ZListCivilStatus: any = [
	{ value: 'C', key: 'Casado' },
	{ value: 'D', key: 'Divorciado' },
	{ value: 'S', key: 'Soltero' },
	{ value: 'V', key: 'Viudo' }
];
