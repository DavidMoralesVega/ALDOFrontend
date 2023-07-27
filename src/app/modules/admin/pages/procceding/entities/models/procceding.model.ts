import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities';

export class ProccedingAdapter {
	constructor(
		public readonly ac_id: string,
		public readonly ac_category: string,
		public readonly ac_File: any,
		public readonly ac_State: boolean,
		public readonly acDateRegister: string
	) {}
}

export type CreateProccedingDto = Omit<ProccedingAdapter, 'ac_id' | 'ac_State' | 'acDateRegister'>;

export interface ProccedingForeignAdapter extends ProccedingAdapter {}

export interface UpdateProccedingDto extends Partial<ProccedingAdapter> {}

@Injectable()
export class Procceding implements Adapter<ProccedingAdapter> {
	adapter(proceedingAdapter: ProccedingAdapter): ProccedingAdapter {
		return new ProccedingAdapter(
			proceedingAdapter.ac_id,
			proceedingAdapter.ac_category,
			proceedingAdapter.ac_File,
			proceedingAdapter.ac_State,
			proceedingAdapter.acDateRegister
		);
	}
}
