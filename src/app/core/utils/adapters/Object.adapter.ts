export type ZPayloadDialog<T> = {
	action: ZDialogAction;
	z: T;
};

export enum ZDialogAction {
	create = 'create',
	update = 'update'
}
