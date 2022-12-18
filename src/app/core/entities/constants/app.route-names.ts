import { IZPath } from '../interfaces/path.interface';

const ZPath_ADMIN = '/admin';

export const ZPaths: IZPath[] = [
	{
		module: 'adsi',
		collase: true,
		name: 'Gaceta',
		icon: 'cog',
		children: [{ module: 'usuario', path: `${ZPath_ADMIN}/user`, name: 'Usuario', icon: 'bell' }]
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
				name: 'Petición de informe inscrito',
				icon: 'bell'
			},
			{
				module: 'resolutions',
				path: `${ZPath_ADMIN}/resolutions`,
				name: 'Resoluciones',
				icon: 'bell'
			},
			{
				module: 'biblioteca',
				path: `${ZPath_ADMIN}/biblioteca`,
				name: 'Biblioteca',
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
			{ module: 'category', path: `${ZPath_ADMIN}/category`, name: 'Categorias', icon: 'bell' },
			{ module: 'post', path: `${ZPath_ADMIN}/post`, name: 'Publicaciones', icon: 'bell' }
		]
	},
	{
		module: 'adsi',
		collase: true,
		name: 'Biblioteca',
		icon: 'address-book',
		children: [
			{
				module: 'biblioteca',
				path: `${ZPath_ADMIN}/biblioteca`,
				name: 'Biblioteca',
				icon: 'bell'
			}
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

// resoluciones
export const ZListResolutions: any = [
	{ value: '0', key: 'Resolución del pleno público o privado' },
	{ value: '1', key: 'Resolución administrativas' },
	{ value: '2', key: 'Resolución de directiva' }
];

// convocatorias
export const ZListCalls: any = [
	{ value: '0', key: 'Convocatoria ordinaria' },
	{ value: '1', key: 'Convocatoria extraodinaria' },
	{ value: '2', key: 'Convocatoria honor' }
];

// contrato
export const ZListContract: any = [
	{ value: '0', key: 'Contrato uno' },
	{ value: '1', key: 'Contrato dos' },
	{ value: '2', key: 'Contrato tres' }
];

// area
export const ZListArea: any = [
	{ value: '0', key: 'Area uno' },
	{ value: '1', key: 'Area dos' },
	{ value: '2', key: 'Area tres' }
];

// categoria
export const ZListCategory: any = [
	{ value: '0', key: 'Categoria uno' },
	{ value: '1', key: 'Categoria dos' },
	{ value: '2', key: 'Categoria tres' }
];

// role
export const ZListRoles: any = [
	{ value: '0', key: 'ENCARGADA DEL AREA DE PROCESOS LEGISLATIVOS' },
	{ value: '1', key: 'PROFESIONAL ADMINISTRATIVO II - TRANSCRIPTOR' },
	{ value: '2', key: 'ENCARGADO DE PROCESO JURIDICOS ADMINISTRATIVOS' },
	{ value: '3', key: 'Oficilia mayor' },
	{ value: '4', key: 'Responsable de archivos' }
];

// area
export const ZListModule: any = [
	{ value: '0', key: 'Modulo uno' },
	{ value: '1', key: 'Modulo dos' },
	{ value: '2', key: 'Modulo tres' }
];

// Comisiones

// Comisiones
export const ZListCardCommissions: any = [
	{
		path: 'directiva',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Mesa Directiva',
		children: [
			{
				name: 'Esperanza Mamani Ajhuacho',
				role: 'Presidente',
				img: 'directiva/1EsperanzaMamaniAjhuacho.jpg'
			},
			{
				name: 'Erwin Vargas Chacon',
				role: 'Vicepresidente',
				img: 'directiva/2ErwinVargasChacon.jpeg'
			},
			{
				name: 'Anabel Bernarda Chambi Laura',
				role: 'Secretario',
				img: 'directiva/3AnabelBernardaChambiLaura.jpeg'
			},
			{
				name: 'Miguel Mauricio Choque',
				role: 'Vocal 1',
				img: 'directiva/4MiguelMauricioChoque.jpeg'
			},
			{ name: 'Ana Tarqui Adrian', role: 'Vocal 2', img: 'directiva/5AnaTarquiAdrian.jpeg' }
		]
	},
	{
		path: 'autonomia-organizacion-territorial-limites',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Autonomía, Organización Territorial y Límites',
		children: [
			{
				name: 'Zulma Arellano Choquetopa',
				role: 'Presidente',
				img: 'autonomia/1ZulmaArellanoChoquetopa.jpeg'
			},
			{
				name: 'Nicolas Choque Colque',
				role: 'Vicepresidente',
				img: 'autonomia/2NicolasChoqueColque.jpeg'
			},
			{
				name: 'Delia Gongora Veliz',
				role: 'Secretario',
				img: 'autonomia/3DeliaGongoraVeliz.jpeg'
			}
		]
	},
	{
		path: 'constitucion-desarrollo-legislativo-sistema-electoral-justicia',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Constitución, Desarrollo Legislativo, Sistema Electoral y Justicia',
		children: [
			{
				name: 'Ronmie Villca Altamirano',
				role: 'Presidente',
				img: 'constitucion/1RonmieVillcaAltamirano.jpeg'
			},
			{
				name: 'Marina Quispe Choque',
				role: 'Vicepresidente',
				img: 'constitucion/2MarinaQuispeChoque.jpeg'
			},
			{
				name: 'Francisca Luisa Rufino Calizaya',
				role: 'Secretario',
				img: 'constitucion/3FranciscaLuisaRufinoCalizaya.jpeg'
			},
			{
				name: 'Natividad Cruz Acurana',
				role: 'Vocal',
				img: 'constitucion/4NatividadCruzAcurana.jpeg'
			}
		]
	},
	{
		path: 'educacion-salud-derechos-humanos-politica-social',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Educación, Salud, Derechos Humanos y Política Social',
		children: [
			{ name: 'Maxima Apaza Luna', role: 'Presidente', img: 'educacion/1MaximaApazaLuna.jpeg' },
			{
				name: 'Juana Gabriela Escarzo Mamani',
				role: 'Vicepresidente',
				img: 'educacion/2JuanaGabrielaEscarzoMamani.jpeg'
			},
			{
				name: 'Alfredo Acapa Colque',
				role: 'Secretario',
				img: 'educacion/3AlfredoAcapaColque.jpeg'
			}
		]
	},
	{
		path: 'infraestructura-obras-publicas-desarrollo',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Infraestructura y Obra Públicas de Desarrollo',
		children: [
			{
				name: 'Jhoselin Anconi Chambi',
				role: 'Presidente',
				img: 'infraestructura/1JhoselinAnconiChambi.jpeg'
			},
			{
				name: 'Armando Barrera Choqueticlla',
				role: 'Vicepresidente',
				img: 'infraestructura/2ArmandoBarreraChoqueticlla.jpeg'
			},
			{
				name: 'David Dante Choque Zegarra',
				role: 'Secretario',
				img: 'infraestructura/3DavidDanteChoqueZegarra.jpeg'
			},
			{
				name: 'Teodoro Calizaya Choquerive',
				role: 'Vocal',
				img: 'infraestructura/4TeodoroCalizayaChoquerive.jpeg'
			}
		]
	},
	{
		path: 'medio-ambiente-desarrollo-rural-integral-sustentable-soberania-alimentaria',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Medio Ambiente, Desarrollo Rural Integral Sustentable y Soberanía Alimentaria',
		children: [
			{
				name: 'Jose Luis Aranibar Araviri',
				role: 'Presidente',
				img: 'ambiente/1JoseLuisAranibarAraviri.webp'
			},
			{
				name: 'Freddy Raul Ramos Quispe',
				role: 'Vicepresidente',
				img: 'ambiente/2FreddyRaulRamosQuispe.jpeg'
			},
			{
				name: 'Ausberto Condori Choque',
				role: 'Vocal',
				img: 'ambiente/3AusbertoCondoriChoque.jpeg'
			}
		]
	},
	{
		path: 'mineria-hidrocarburos-recursos-naturales-produccion-industria-comercio-servicios',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Minería e Hidrocarburos, Recursos Naturales, Producción Industria, Comercio y Servicios',
		children: [
			{
				name: 'Edwin Fuentes Camacho',
				role: 'Presidente',
				img: 'mineria/1EdwinFuentesCamacho.jpeg'
			},
			{
				name: 'Freddy Castillo Chavez',
				role: 'Vicepresidente',
				img: 'mineria/2FreddyCastilloChavez.jpeg'
			},
			{
				name: 'Ramon Raul Caro Santos',
				role: 'Secretario',
				img: 'mineria/3RamonRaulCaroSantos.jpeg'
			}
		]
	},
	{
		path: 'planificacion-politica-economica-finanzas-publicas',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Planificación, Política Económica y Finanzas Publicas',
		children: [
			{
				name: 'Maria Carolina Lino Condori',
				role: 'Presidente',
				img: 'planificacion/1MariaCarolinaLinoCondori.jpeg'
			},
			{
				name: 'Hugo Huanca Choque',
				role: 'Vicepresidente',
				img: 'planificacion/2HugoHuancaChoque.jpeg'
			},
			{
				name: 'Maria Mamani Molina',
				role: 'Secretario',
				img: 'planificacion/3MariaMamaniMolina.jpeg'
			},
			{
				name: 'Edgar Alex Huanca Guanay',
				role: 'Vocal',
				img: 'planificacion/4EdgarAlexHuancaGuanay.jpeg'
			}
		]
	},
	{
		path: 'relaciones-intergubernamentales-internacionales',
		img: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Relaciones Intergubernamentales e Internacionales',
		children: [
			{
				name: 'Franz Jhonny Ochoa Yucra',
				role: 'Presidente',
				img: 'relaciones/1FranzJhonnyOchoaYucra.jpeg'
			},
			{
				name: 'Mirian Lucia Rocha Canaviri',
				role: 'Vicepresidente',
				img: 'relaciones/2MirianLuciaRochaCanaviri.jpeg'
			},
			{
				name: 'Jhnony Fernandez Calani',
				role: 'Secretario',
				img: 'relaciones/3JhnonyFernandezCalani.jpeg'
			},
			{ name: 'Roman Brito', role: 'Vocal', img: 'relaciones/4RomanBrito.jpeg' }
		]
	}
];
