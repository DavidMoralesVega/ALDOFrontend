export interface Adapter<T> {
	adapter(item: T): T;
}

export type Payload<T> = { payload: T };
export type PayloadUpdate<T, ID> = { payload: T; id: ID };
export type PayloadLogin<T, ID> = { payload: T; t: ID };
export type PayloadData<T> = { data: T };

export interface PayloadFile {
	file: File,
	isValid: boolean
}
