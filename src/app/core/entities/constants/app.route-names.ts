import { IZPath, IZPathCard } from '../interfaces/path.interface';

export interface ZC_Preload {
	value: number | string;
	key: string;
	children?: ZC_Preload[];
}

const ZPath_ADMIN: string = '/admin';

export const ZPaths: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Configuración',
		icon: 'cog',
		children: [
			{ module: 'usuario', path: `${ZPath_ADMIN}/user`, name: 'Usuario', icon: 'bell' },
			{
				module: 'legislature',
				path: `${ZPath_ADMIN}/legislature`,
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
			{ module: 'contract', path: `${ZPath_ADMIN}/contract`, name: 'Contratos', icon: 'bell' },
			{ module: 'calls', path: `${ZPath_ADMIN}/calls`, name: 'Convocatorias', icon: 'bell' },
			{
				module: 'departament-law',
				path: `${ZPath_ADMIN}/departament-law`,
				name: 'Leyes departamentales',
				icon: 'bell'
			},
			{
				module: 'departament-law-search',
				path: `${ZPath_ADMIN}/departament-law-search`,
				name: 'Busqueda leyes departamentales',
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
				name: 'Petición de informe escrito',
				icon: 'bell'
			},
			{
				module: 'resolutions',
				path: `${ZPath_ADMIN}/resolutions`,
				name: 'Resoluciones',
				icon: 'bell'
			},
			{
				module: 'archivos',
				path: `${ZPath_ADMIN}/archivos`,
				name: 'Archivos',
				icon: 'bell'
			},
			{
				module: 'actas',
				path: `${ZPath_ADMIN}/actas`,
				name: 'Actas',
				icon: 'bell'
			}

			/* {
				module: 'biblioteca',
				path: `${ZPath_ADMIN}/biblioteca`,
				name: 'Biblioteca',
				icon: 'bell'
			},
			{
				module: 'search-biblioteca',
				path: `${ZPath_ADMIN}/search-biblioteca`,
				name: 'Buscador Biblioteca',
				icon: 'bell'
			} */
		]
	},
	{
		module: 'adsi',
		collase: true,
		name: 'Blog',
		icon: 'newspaper',
		children: [
			{ module: 'category', path: `${ZPath_ADMIN}/category`, name: 'Categorias', icon: 'bell' },
			{ module: 'post', path: `${ZPath_ADMIN}/post`, name: 'Publicaciones', icon: 'bell' }
		]
	}
];

export const ZMessages = {
	success: 'Exitoso',
	error: 'Error en el servidor'
};

export const ZListRegion: string[] = [
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

export const ZListOrigin: string[] = ['BE', 'CB', 'CH', 'LP', 'OR', 'PD', 'PT', 'SC', 'TJ'];

export const ZListContinent: string[] = ['Europa', 'America', 'Oceania', 'Norte Europa', 'Asia'];
export const ZListTypeDocument: string[] = ['CI', 'RUN', 'RNI'];
export const ZListSize: string[] = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
export const ZListBoot: string[] = [
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
export const ZListTypeBlood: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const ZListCivilStatus: ZC_Preload[] = [
	{ value: 'C', key: 'Casado' },
	{ value: 'D', key: 'Divorciado' },
	{ value: 'S', key: 'Soltero' },
	{ value: 'V', key: 'Viudo' }
];

// resoluciones
export const ZListResolutions: ZC_Preload[] = [
	{ value: '0', key: 'Resolución del pleno público o privado' },
	{ value: '1', key: 'Resolución administrativas' },
	{ value: '2', key: 'Resolución de directiva' }
];

// convocatorias
export const ZListCalls: ZC_Preload[] = [
	{ value: '0', key: 'Convocatoria ordinaria' },
	{ value: '1', key: 'Convocatoria extraodinaria' },
	{ value: '2', key: 'Convocatoria honor' }
];

// contrato
export const ZListContract: ZC_Preload[] = [
	{ value: '0', key: 'Menores - Contratación Menor' },
	{ value: '1', key: 'Mayor RPC - Licitación Pública' },
	{ value: '2', key: 'ANPE - Apoyo Nacional a la Produción de Empleo' },
	{ value: '3', key: 'Documentacion de procesos juridicos administrativos' } //TODO: CONTRATOS OJO REVIEW
];
export const ZListContractAdministrativo: ZC_Preload[] = [
	{ value: '3', key: 'Documentacion de procesos juridicos administrativos' } //TODO: CONTRATOS OJO REVIEW
];

// area
export const ZListArea: ZC_Preload[] = [
	{ value: '0', key: 'Área uno' },
	{ value: '1', key: 'Área dos' },
	{ value: '2', key: 'Área tres' }
];

// categoria
export const ZListCategory: ZC_Preload[] = [
	{ value: '0', key: 'Categoría uno' },
	{ value: '1', key: 'Categoría dos' },
	{ value: '2', key: 'Categoría tres' }
];

// role
export const ZListRoles: ZC_Preload[] = [
	{ value: '0', key: 'Encargada Del Área de Procesos Legislativos' },
	{ value: '1', key: 'Profesional Administrativo II - Transcriptior' },
	{ value: '2', key: 'Encargado de Proceso Juridicos Administrativos' },
	{ value: '3', key: 'Encargado Área de Contratación' },
	{ value: '4', key: 'Encargado de Procesos Legislativos Administrativos' },
	{ value: '5', key: 'Administrador' },
	{ value: '6', key: 'Administrador de Blog' }
];
export const ZListCategorys: ZC_Preload[] = [
	{ value: 'Sesión Ordinaria', key: 'Sesión ordinaria' },
	{ value: 'Sesión extraordinaria', key: 'Sesión extraordinaria' },
	{ value: 'Sesión de honor', key: 'Sesión de honor' }
];

// area
export const ZListModule: ZC_Preload[] = [
	{ value: '0', key: 'Módulo uno' },
	{ value: '1', key: 'Módulo dos' },
	{ value: '2', key: 'Módulo tres' }
];

// Comisiones

// Comisiones
export const ZListCardCommissions: IZPathCard[] = [
	{
		path: 'directiva',
		img: 'comisiones/directiva.png',
		title: 'Mesa Directiva',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'directiva/PRESIDENTE.png',
				col: '12',
				height: '290',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'directiva/VICEPRESIDENTE.png',
				col: '3',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'directiva/SECRETARIO.png',
				col: '3',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL1',
				img: 'directiva/VOCAL1.png',
				col: '3',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL2',
				img: 'directiva/VOCAL2.png',
				col: '3',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'constitucion-desarrollo-legislativo-sistema-electoral-justicia',
		img: 'comisiones/constitucion.png',
		title: 'Constitución, Desarrollo Legislativo, Sistema Electoral y Justicia',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'constitucion/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'constitucion/VICEPRESIDENTE.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'constitucion/SECRETARIO.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL',
				img: 'constitucion/VOCAL.png',
				col: '4',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'planificacion-politica-economica-finanzas-publicas',
		img: 'comisiones/planificacion.png',
		title: 'Planificación, Política Económica y Finanzas Publicas',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'planificacion/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'planificacion/VICEPRESIDENTE.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'planificacion/SECRETARIO.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL',
				img: 'planificacion/VOCAL.png',
				col: '4',
				height: '220',
				width: '200'
			}
		]
	},
	{
		path: 'infraestructura-obras-publicas-desarrollo',
		img: 'comisiones/infraestructura.png',
		title: 'Infraestructura y Obra Públicas de Desarrollo',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'infraestructura/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'infraestructura/VICEPRESIDENTE.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'infraestructura/SECRETARIO.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL',
				img: 'infraestructura/VOCAL.png',
				col: '4',
				height: '220',
				width: '200'
			}
		]
	},
	{
		path: 'mineria-hidrocarburos-recursos-naturales-produccion-industria-comercio-servicios',
		img: 'comisiones/mineria.png',
		title: 'Minería e Hidrocarburos, Recursos Naturales, Producción Industria, Comercio y Servicios',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'mineria/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'mineria/VICEPRESIDENTE.png',
				col: '6',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'mineria/SECRETARIO.png',
				col: '6',
				height: '220',
				width: '200'
			}
		]
	},
	{
		path: 'autonomia-organizacion-territorial-limites',
		img: 'comisiones/autonomia.png',
		title: 'Autonomía, Organización Territorial y Límites',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'autonomia/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'autonomia/VICEPRESIDENTE.png',
				col: '6',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'autonomia/SECRETARIO.png',
				col: '6',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'relaciones-intergubernamentales-internacionales',
		img: 'comisiones/internacional.png',
		title: 'Relaciones Intergubernamentales e Internacionales',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'relaciones/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'relaciones/VICEPRESIDENTE.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'relaciones/SECRETARIO.png',
				col: '4',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL',
				img: 'relaciones/VOCAL.png',
				col: '4',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'educacion-salud-derechos-humanos-politica-social',
		img: 'comisiones/educacionsalud.png',
		title: 'Educación, Salud, Derechos Humanos y Política Social',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'educacion/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'educacion/VICEPRESIDENTE.png',
				col: '6',
				height: '220',
				width: '200'
			},
			{
				role: 'SECRETARIO',
				img: 'educacion/SECRETARIO.png',
				col: '6',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'medio-ambiente-desarrollo-rural-integral-sustentable-soberania-alimentaria',
		img: 'comisiones/medioambiente.png',
		title: 'Medio Ambiente, Desarrollo Rural Integral Sustentable y Soberanía Alimentaria',
		children: [
			{
				role: 'PRESIDENTE',
				img: 'ambiente/PRESIDENTE.png',
				col: '12',
				height: '220',
				width: '200'
			},
			{
				role: 'VICEPRESIDENTE',
				img: 'ambiente/VICEPRESIDENTE.png',
				col: '6',
				height: '220',
				width: '200'
			},
			{
				role: 'VOCAL',
				img: 'ambiente/VOCAL.png',
				col: '6',
				height: '220',
				width: '200'
			}
		]
	}
];

// MODALIDAD
export const ZListModalidad: ZC_Preload[] = [
	{ value: '60', key: 'Ordinaria' },
	{ value: '50', key: 'Extraordinaria' },
	{ value: '20', key: 'Sesiones de honor' }
];

// SESIÓNES
export const ZListSesiones: ZC_Preload[] = [
	{ value: '1', key: 'PRIMERA SESIÓN' },
	{ value: '2', key: 'SEGUNDA SESIÓN' },
	{ value: '3', key: 'TERCERA SESIÓN' },
	{ value: '4', key: 'CUARTA SESIÓN' },
	{ value: '5', key: 'QUINTA SESIÓN' },
	{ value: '6', key: 'SEXTA SESIÓN' },
	{ value: '7', key: 'SEPTIMA SESIÓN' },
	{ value: '8', key: 'OCTAVA SESIÓN' },
	{ value: '9', key: 'NOVENA SESIÓN' },
	{ value: '10', key: 'DECIMA SESIÓN' },
	{ value: '11', key: 'UNDECIMA SESIÓN' },
	{ value: '12', key: 'DUODECIMA SESIÓN' },
	{ value: '13', key: 'DECIMA TERCERA SESIÓN' },
	{ value: '14', key: 'DECIMA CUARTA SESIÓN' },
	{ value: '15', key: 'DECIMA QUINTA SESIÓN' },
	{ value: '16', key: 'DECIMA SEXTA SESIÓN' },
	{ value: '17', key: 'DECIMA SEPTIMA SESIÓN' },
	{ value: '18', key: 'DECIMA OCTAVA SESIÓN' },
	{ value: '19', key: 'DECIMA NOVENA SESIÓN' },
	{ value: '20', key: 'VIGESIMA SESIÓN' },
	{ value: '21', key: 'VIGESIMA PRIMERA SESIÓN' },
	{ value: '22', key: 'VIGESIMA SEGUNDA SESIÓN' },
	{ value: '23', key: 'VIGESIMA TERCERA SESIÓN' },
	{ value: '24', key: 'VIGESIMA CUARTA SESIÓN' },
	{ value: '25', key: 'VIGESIMA QUINTA SESIÓN' },
	{ value: '26', key: 'VIGESIMA SEXTA SESIÓN' },
	{ value: '27', key: 'VIGESIMA SEPTIMA SESIÓN' },
	{ value: '28', key: 'VIGESIMA OCTAVA SESIÓN' },
	{ value: '29', key: 'VIGESIMA NOVENA SESIÓN' },
	{ value: '30', key: 'TRIGESIMA SESIÓN' },
	{ value: '31', key: 'TRIGESIMA PRIMERA SESIÓN' },
	{ value: '32', key: 'TRIGESIMA SEGUNDA SESIÓN' },
	{ value: '33', key: 'TRIGESIMA TERCERA SESIÓN' },
	{ value: '34', key: 'TRIGESIMA CUARTA SESIÓN' },
	{ value: '35', key: 'TRIGESIMA QUINTA SESIÓN' },
	{ value: '36', key: 'TRIGESIMA SEXTA SESIÓN' },
	{ value: '37', key: 'TRIGESIMA SEPTIMA SESIÓN' },
	{ value: '38', key: 'TRIGESIMA OCTAVA SESIÓN' },
	{ value: '39', key: 'TRIGESIMA NOVENA SESIÓN' },
	{ value: '40', key: 'CUADRAGESIMA SESIÓN' },
	{ value: '41', key: 'CUADRAGESIMA PRIMERA SESIÓN' },
	{ value: '42', key: 'CUADRAGESIMA SEGUNDA SESIÓN' },
	{ value: '43', key: 'CUADRAGESIMA TERCERA SESIÓN' },
	{ value: '44', key: 'CUADRAGESIMA CUARTA SESIÓN' },
	{ value: '45', key: 'CUADRAGESIMA QUINTA SESIÓN' },
	{ value: '46', key: 'CUADRAGESIMA SEXTA SESIÓN' },
	{ value: '47', key: 'CUADRAGESIMA SEPTIMA SESIÓN' },
	{ value: '48', key: 'CUADRAGESIMA OCTAVA SESIÓN' },
	{ value: '49', key: 'CUADRAGESIMA NOVENA SESIÓN' },
	{ value: '50', key: 'QUINCUAGESIMA SESIÓN' },
	{ value: '51', key: 'QUINCUAGESIMA PRIMERA SESIÓN' },
	{ value: '52', key: 'QUINCUAGESIMA SEGUNDA SESIÓN' },
	{ value: '53', key: 'QUINCUAGESIMA TERCERA SESIÓN' },
	{ value: '54', key: 'QUINCUAGESIMA CUARTA SESIÓN' },
	{ value: '55', key: 'QUINCUAGESIMA QUINTA SESIÓN' },
	{ value: '56', key: 'QUINCUAGESIMA SEXTA SESIÓN' },
	{ value: '57', key: 'QUINCUAGESIMA SEPTIMA SESIÓN' },
	{ value: '58', key: 'QUINCUAGESIMA OCTAVA SESIÓN' },
	{ value: '59', key: 'QUINCUAGESIMA NOVENA SESIÓN' },
	{ value: '60', key: 'SEXAGESIMA SESIÓN' }
];

/*
cuadragésimo
quincuagésimo
sexagésimo
septuagésimo
octogésimo
nonagésimo
*/
