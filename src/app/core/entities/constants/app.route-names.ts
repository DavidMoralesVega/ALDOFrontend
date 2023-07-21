import { IZPath } from '../interfaces/path.interface';

export interface ZC_Preload {
	value: number;
	key: string;
	children?: ZC_Preload[];
}

const ZPath_ADMIN = '/admin';

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
	/* {
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
	} */
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
	{ value: '0', key: 'Menores - Contratación Menor' },
	{ value: '1', key: 'Mayor RPC - Licitación Pública' },
	{ value: '2', key: 'ANPE - Apoyo Nacional a la Produción de Empleo' }
];

// area
export const ZListArea: any = [
	{ value: '0', key: 'Área uno' },
	{ value: '1', key: 'Área dos' },
	{ value: '2', key: 'Área tres' }
];

// categoria
export const ZListCategory: any = [
	{ value: '0', key: 'Categoría uno' },
	{ value: '1', key: 'Categoría dos' },
	{ value: '2', key: 'Categoría tres' }
];

// role
export const ZListRoles: any = [
	{ value: '0', key: 'Encargada Del Área de Procesos Legislativos' },
	{ value: '1', key: 'Profesional Administrativo II - Transcriptior' },
	{ value: '2', key: 'Encargado de Proceso Juridicos Administrativos' },
	{ value: '3', key: 'Encargado Área de Contratación' },
	{ value: '4', key: 'Encargado de Procesos Legislativos Administrativos' }
];

// area
export const ZListModule: any = [
	{ value: '0', key: 'Módulo uno' },
	{ value: '1', key: 'Módulo dos' },
	{ value: '2', key: 'Módulo tres' }
];

// Comisiones

// Comisiones
export const ZListCardCommissions: any = [
	{
		path: 'directiva',
		img: 'comisiones/directiva.png',
		title: 'Mesa Directiva',
		children: [
			{
				name: 'Esperanza Mamani Ajhuacho',
				role: 'Presidente',
				img: 'directiva/1EsperanzaMamaniAjhuacho.png',
				col: '12',
				whatsapp: '67200380',
				dateBirth: '30 de septiembre de 1979',
				placeBirth: 'Oruro - Pantaleón Dalence - Machacamarca',
				origin: 'Cercado',
				linkedin: 'https',
				height: '290',
				width: '200'
			},
			{
				name: 'Erwin Vargas Chacon',
				role: 'Vicepresidente',
				img: 'directiva/2ErwinVargasChacon.png',
				col: '3',
				whatsapp: '67200477',
				dateBirth: '7 de abril de 1985 ',
				placeBirth: 'La Paz',
				origin: 'Tomas Barrón',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Anabel Bernarda Chambi Laura',
				role: 'Secretario',
				img: 'directiva/3AnabelBernardaChambiLaura.png',
				col: '3',
				whatsapp: '67201009',
				dateBirth: '28 de enero de 1987',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Miguel Mauricio Choque',
				role: 'Vocal 1',
				img: 'directiva/4MiguelMauricioChoque.png',
				col: '3',
				whatsapp: '67202431',
				dateBirth: '28 de junio de 1983',
				placeBirth: 'Oruro - Avaroa - Villañeque',
				origin: 'Murato',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Ana Tarqui Adrian',
				role: 'Vocal 2',
				img: 'directiva/5AnaTarquiAdrian.png',
				col: '3',
				whatsapp: '67200513',
				dateBirth: '22 de enero de 1960',
				placeBirth: 'Oruro - Cercado - Sepulturas',
				origin: 'Oruro',
				linkedin: 'https',
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
				name: 'Ronmie Villca Altamirano',
				role: 'Presidente',
				img: 'constitucion/1RonmieVillcaAltamirano.png',
				col: '12',
				whatsapp: '67200477',
				dateBirth: '14 de noviembre de 1967',
				placeBirth: 'La Paz',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Marina Quispe Choque',
				role: 'Vicepresidente',
				img: 'constitucion/2MarinaQuispeChoque.png',
				col: '4',
				whatsapp: '67202672',
				dateBirth: '12 de septiembre de 1970',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Francisca Luisa Rufino Calizaya',
				role: 'Secretario',
				img: 'constitucion/3FranciscaLuisaRufinoCalizaya.png',
				col: '4',
				whatsapp: '67200887',
				dateBirth: '10 de octubre de 1963',
				placeBirth: 'Oruro - Cercado',
				origin: 'Poopó',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Natividad Cruz Acurana',
				role: 'Vocal',
				img: 'constitucion/4NatividadCruzAcurana.png',
				col: '4',
				whatsapp: '67201703',
				dateBirth: '8 de septiembre de 1959',
				placeBirth: 'Oruro - Litoral - Machacamarca',
				origin: 'Litoral',
				linkedin: 'https',
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
				name: 'Maria Carolina Lino Condori',
				role: 'Presidente',
				img: 'planificacion/1MariaCarolinaLinoCondori.png',
				col: '12',
				whatsapp: '67200415',
				dateBirth: '6 de mayo de 1963',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Hugo Huanca Choque',
				role: 'Vicepresidente',
				img: 'planificacion/2HugoHuancaChoque.png',
				col: '4',
				whatsapp: '67202343',
				dateBirth: '10 de abril de 1977',
				placeBirth: 'Oruro - Sur Carangas - Belén de Andamarca',
				origin: 'Sur Carangas',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Maria Mamani Molina',
				role: 'Secretario',
				img: 'planificacion/3MariaMamaniMolina.png',
				col: '4',
				whatsapp: '67200609',
				dateBirth: '9 de abril de 1973',
				placeBirth: 'Oruro - Carangas - Patalca',
				origin: 'Ladislao Cabrera',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Edgar Alex Huanca Guanay',
				role: 'Vocal',
				img: 'planificacion/4EdgarAlexHuancaGuanay.png',
				col: '4',
				whatsapp: '67200401',
				dateBirth: '25 de noviembre de 1979',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
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
				name: 'Jhoselin Anconi Chambi',
				role: 'Presidente',
				img: 'infraestructura/1JhoselinAnconiChambi.png',
				col: '12',
				whatsapp: '71840869',
				dateBirth: '16 de julio de 1995',
				placeBirth: 'Cochabamba',
				origin: 'San Pedro de Totora',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Armando Barrera Choqueticlla',
				role: 'Vicepresidente',
				img: 'infraestructura/2ArmandoBarreraChoqueticlla.png',
				col: '4',
				whatsapp: '67201336',
				dateBirth: '31 de enero de 1968',
				placeBirth: 'Oruro - Avaroa - Challapata',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'David Dante Choque Zegarra',
				role: 'Secretario',
				img: 'infraestructura/3DavidDanteChoqueZegarra.png',
				col: '4',
				whatsapp: '67200484',
				dateBirth: '11 de noviembre de 1983',
				placeBirth: 'Oruro - Mejillones - Carangas',
				origin: 'Mejillones',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Teodoro Calizaya Choquerive',
				role: 'Vocal',
				img: 'infraestructura/4TeodoroCalizayaChoquerive.png',
				col: '4',
				whatsapp: '67202695',
				dateBirth: '28 de diciembre de 1973',
				placeBirth: 'Oruro - Avaroa - Tolaquicta',
				origin: 'Eduardo Avaroa',
				linkedin: 'https',
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
				name: 'Edwin Fuentes Camacho',
				role: 'Presidente',
				img: 'mineria/1EdwinFuentesCamacho.png',
				col: '12',
				whatsapp: '67200443',
				dateBirth: '11 de mayo de 1979',
				placeBirth: 'Cochabamba',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Freddy Castillo Chavez',
				role: 'Vicepresidente',
				img: 'mineria/2FreddyCastilloChavez.png',
				col: '6',
				whatsapp: '67201214',
				dateBirth: '22 de mayo de 1977',
				placeBirth: 'La Paz',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Ramon Raul Caro Santos',
				role: 'Secretario',
				img: 'mineria/3RamonRaulCaroSantos.png',
				col: '6',
				whatsapp: '67200438',
				dateBirth: '31 de agosto de 1957',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
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
				name: 'Zulma Arellano Choquetopa',
				role: 'Presidente',
				img: 'autonomia/1ZulmaArellanoChoquetopa.png',
				col: '12',
				whatsapp: '67201084',
				dateBirth: '16 de octubre de 1987',
				placeBirth: 'Oruro - Sebastian Pagador - Huari',
				origin: 'Sebastian Pagador',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Nicolas Choque Colque',
				role: 'Vicepresidente',
				img: 'autonomia/2NicolasChoqueColque.png',
				col: '6',
				whatsapp: '67201016',
				dateBirth: '23 de diciembre de 1954',
				placeBirth: 'Oruro - Pantaleón Dalence - Aguas Calientes',
				origin: 'Pantaleón Dalence',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Delia Gongora Veliz',
				role: 'Secretario',
				img: 'autonomia/3DeliaGongoraVeliz.png',
				col: '6',
				whatsapp: '67201458',
				dateBirth: '16 de diciembre de 1979',
				placeBirth: 'Oruro - Cercado',
				origin: 'Carangas',
				linkedin: 'https',
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
				name: 'Franz Jhonny Ochoa Yucra',
				role: 'Presidente',
				img: 'relaciones/1FranzJhonnyOchoaYucra.png',
				col: '12',
				whatsapp: '67201659',
				dateBirth: '6 de marzo de 1977',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Mirian Lucia Rocha Canaviri',
				role: 'Vicepresidente',
				img: 'relaciones/2MirianLuciaRochaCanaviri.png',
				col: '4',
				whatsapp: '67201638',
				dateBirth: '1 de octubre de 1988',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Jhnony Fernandez Calani',
				role: 'Secretario',
				img: 'relaciones/3JhnonyFernandezCalani.png',
				col: '4',
				whatsapp: '67201461',
				dateBirth: '2 de septiembre de 1983',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Roman Brito',
				role: 'Vocal',
				img: 'relaciones/4RomanBrito.png',
				col: '4',
				whatsapp: '67202894',
				dateBirth: '27 de febrero de 1962',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
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
				name: 'Maxima Apaza Luna',
				role: 'Presidente',
				img: 'educacion/1MaximaApazaLuna.png',
				col: '12',
				whatsapp: '71843702',
				dateBirth: '19 de noviembre de 1972',
				placeBirth: 'Oruro - Sajama - Curahuara de Carangas',
				origin: 'Sajama',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Juana Gabriela Escarzo Mamani',
				role: 'Vicepresidente',
				img: 'educacion/2JuanaGabrielaEscarzoMamani.png',
				col: '6',
				whatsapp: '67201216',
				dateBirth: '24 de junio de 1984',
				placeBirth: 'Oruro - Cercado',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Alfredo Acapa Colque',
				role: 'Secretario',
				img: 'educacion/3AlfredoAcapaColque.png',
				col: '6',
				whatsapp: '67200965',
				dateBirth: '17 de julio de 1971',
				placeBirth: 'Oruro - Saucari - Toledo',
				origin: 'Saucari',
				linkedin: 'https',
				height: '220',
				width: '200'
			}
		]
	},

	{
		path: 'medio-ambiente-desarrollo-rural-integral-sustentable-soberania-alimentaria',
		img: 'comisiones/medioambeinte.png',
		title: 'Medio Ambiente, Desarrollo Rural Integral Sustentable y Soberanía Alimentaria',
		children: [
			{
				name: 'Jose Luis Aranibar Araviri',
				role: 'Presidente',
				img: 'ambiente/1JoseLuisAranibarAraviri.png',
				col: '12',
				whatsapp: '67202330',
				dateBirth: '30 de junio de 1979',
				placeBirth: 'Oruro - Cercado',
				origin: 'Sabaya',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Freddy Raul Ramos Quispe',
				role: 'Vicepresidente',
				img: 'ambiente/2FreddyRaulRamosQuispe.png',
				col: '6',
				whatsapp: '67202573',
				dateBirth: '23 de diciembre de 1983',
				placeBirth: 'Oruro - Cercado - Nor Carangas',
				origin: 'Nor Carangas',
				linkedin: 'https',
				height: '220',
				width: '200'
			},
			{
				name: 'Ausberto Condori Choque',
				role: 'Vocal',
				img: 'ambiente/3AusbertoCondoriChoque.png',
				col: '6',
				whatsapp: '67200558',
				dateBirth: '10 de febrero de 1957',
				placeBirth: 'Oruro - Litoral - Escara',
				origin: 'Oruro',
				linkedin: 'https',
				height: '220',
				width: '200'
			}
		]
	}
];

// MODALIDAD
export const ZListModalidad: any = [
	{ value: '60', key: 'Ordinaria' },
	{ value: '50', key: 'Extraordinaria' },
	{ value: '20', key: 'Sesiones de honor' }
];

// SESIÓNES
export const ZListSesiones: any = [
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
