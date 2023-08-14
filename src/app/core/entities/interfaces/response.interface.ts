export interface Response<T> {
	isArray: boolean;
	path: string;
	duration: string;
	method: string;
	data: T;
}

export interface ZI_Response<T> {
	loading: boolean;
	data: T;
}
