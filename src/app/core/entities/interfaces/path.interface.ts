export interface IZPath {
	module: string;
	icon: string;
	name: string;
	collase: boolean;
	children?: IZPathChildren[];
	path?: string;
}

interface IZPathChildren {
	module: string;
	path: string;
	name: string;
	icon: string;
}

export interface IZPathCard {
	path: string;
	img: string;
	title: string;
	children: IZPathCardChildren[];
}

interface IZPathCardChildren {
	name?: string;
	role?: string;
	img?: string;
	col: string;
	whatsapp?: string;
	dateBirth?: string;
	placeBirth?: string;
	origin?: string;
	linkedin?: string;
	height: string;
	width: string;
}
