import { IZPath } from '../interfaces/path.interface';

const ZPath_ADMININISTRADOR = '/administrador';
const ZPath_BLOG = '/administrador-blog';
const ZPath_CONCENTRACION = '/encargado-area-concentracion';
const ZPath_JURIDICOS_ADMINISTRATIVOS = '/juridicos-administrativos';
const ZPath_PROCESO = '/encargado-area-proceso';
const ZPath_TECNICOSUPERVISOR = '/tecnico-supervisor';
const ZPath_TRANSCRIPTOR = '/transcriptor';

export const ZPathsAdministrador: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Configuración',
		icon: 'cog',
		children: [
			{
				module: 'usuario',
				path: `${ZPath_ADMININISTRADOR}/user`,
				name: 'Usuario',
				icon: 'bell'
			},
			{
				module: 'legislature',
				path: `${ZPath_ADMININISTRADOR}/legislature`,
				name: 'Legislatura',
				icon: 'bell'
			}
		]
	},
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'contract',
				path: `${ZPath_ADMININISTRADOR}/contract`,
				name: 'Contratos',
				icon: 'bell'
			},
			{
				module: 'calls',
				path: `${ZPath_ADMININISTRADOR}/calls`,
				name: 'Convocatorias',
				icon: 'bell'
			},
			{
				module: 'departament-law',
				path: `${ZPath_ADMININISTRADOR}/departament-law`,
				name: 'Leyes departamentales',
				icon: 'bell'
			},
			/* {
				module: 'departament-law-search',
				path: `${ZPath_ADMININISTRADOR}/departament-law-search`,
				name: 'Busqueda leyes departamentales',
				icon: 'bell'
			}, */
			{
				module: 'recognition',
				path: `${ZPath_ADMININISTRADOR}/recognition`,
				name: 'Reconocimientos',
				icon: 'bell'
			},
			{
				module: 'request-reports',
				path: `${ZPath_ADMININISTRADOR}/request-reports`,
				name: 'Petición de informe oral',
				icon: 'bell'
			},
			{
				module: 'request-written',
				path: `${ZPath_ADMININISTRADOR}/request-written`,
				name: 'Petición de informe escrito',
				icon: 'bell'
			},
			{
				module: 'resolutions',
				path: `${ZPath_ADMININISTRADOR}/resolutions`,
				name: 'Resoluciones',
				icon: 'bell'
			},
			{
				module: 'archivos',
				path: `${ZPath_ADMININISTRADOR}/archivos`,
				name: 'Archivos',
				icon: 'bell'
			},
			{
				module: 'actas',
				path: `${ZPath_ADMININISTRADOR}/actas`,
				name: 'Actas',
				icon: 'bell'
			}
		]
	},
	{
		module: 'adsi',
		collase: true,
		name: 'Blog',
		icon: 'newspaper',
		children: [
			{
				module: 'category',
				path: `${ZPath_ADMININISTRADOR}/category`,
				name: 'Categorias',
				icon: 'bell'
			},
			{
				module: 'post',
				path: `${ZPath_ADMININISTRADOR}/post`,
				name: 'Publicaciones',
				icon: 'bell'
			}
		]
	}
];

export const ZPathsBlog: IZPath[] = [
	{
		module: 'blog',
		collase: true,
		name: 'Blog',
		icon: 'newspaper',
		children: [
			{ module: 'category', path: `${ZPath_BLOG}/category`, name: 'Categorias', icon: 'bell' },
			{ module: 'post', path: `${ZPath_BLOG}/post`, name: 'Publicaciones', icon: 'bell' }
		]
	}
];

export const ZPathsConcentracion: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'contract',
				path: `${ZPath_CONCENTRACION}/contract`,
				name: 'Contratos',
				icon: 'bell'
			}
		]
	}
];

export const ZPathsJuridicosAdministrativos: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'contract',
				path: `${ZPath_JURIDICOS_ADMINISTRATIVOS}/contract`,
				name: 'Contratos',
				icon: 'bell'
			}
		]
	}
];

export const ZPathsProceso: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'departament-law',
				path: `${ZPath_PROCESO}/departament-law`,
				name: 'Leyes departamentales',
				icon: 'bell'
			},
			/* {
				module: 'departament-law-search',
				path: `${ZPath_PROCESO}/departament-law-search`,
				name: 'Busqueda leyes departamentales',
				icon: 'bell'
			}, */
			{
				module: 'recognition',
				path: `${ZPath_PROCESO}/recognition`,
				name: 'Reconocimientos',
				icon: 'bell'
			},
			{
				module: 'request-reports',
				path: `${ZPath_PROCESO}/request-reports`,
				name: 'Petición de informe oral',
				icon: 'bell'
			},
			{
				module: 'request-written',
				path: `${ZPath_PROCESO}/request-written`,
				name: 'Petición de informe escrito',
				icon: 'bell'
			}
		]
	}
];

export const ZPathsTecnicoSupervisor: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'archivos',
				path: `${ZPath_TECNICOSUPERVISOR}/archivos`,
				name: 'Archivos',
				icon: 'bell'
			}
		]
	}
];

export const ZPathsTranscriptor: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'gavel',
		children: [
			{
				module: 'calls',
				path: `${ZPath_TRANSCRIPTOR}/calls`,
				name: 'Convocatorias',
				icon: 'bell'
			},
			{
				module: 'resolutions',
				path: `${ZPath_TRANSCRIPTOR}/resolutions`,
				name: 'Resoluciones',
				icon: 'bell'
			},
			{
				module: 'actas',
				path: `${ZPath_TRANSCRIPTOR}/actas`,
				name: 'Actas',
				icon: 'bell'
			}
		]
	}
];
