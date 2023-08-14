import { ZI_Response } from '../entities';

export function getResponseIS<T>(entity: T): ZI_Response<T> {
	return {
		data: entity,
		loading: true
	};
}
