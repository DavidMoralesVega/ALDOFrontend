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
