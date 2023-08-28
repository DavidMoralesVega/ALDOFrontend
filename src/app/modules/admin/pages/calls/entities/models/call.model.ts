import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities/models/legislature.model';

export class CallAdapter {
	constructor(
		public readonly call_id: string,
		public readonly call_title: string,
		public readonly call_hours: string,
		public readonly call_modality: string,
		public readonly call_numSession: string,
		public readonly call_dateUpdate: Date,
		public readonly CallFile: string,
		public readonly call_create: string,
		public readonly call_estado: boolean,
		public readonly CallVisibility: string,
		public readonly IdcallLeg: string
	) {}
}

export type CreateCallDto = Omit<CallAdapter, 'call_id' | 'call_create' | 'call_estado'>;

export interface UpdateCallForeignAdapter extends CallAdapter {
	readonly legislatura: LegislatureAdapter;
}

export interface UpdateCallDto extends Partial<CallAdapter> {}

@Injectable()
export class Call implements Adapter<CallAdapter> {
	adapter(callAdapter: CallAdapter): CallAdapter {
		return new CallAdapter(
			callAdapter.call_id,
			callAdapter.call_title,
			callAdapter.call_hours,
			callAdapter.call_modality,
			callAdapter.call_numSession,
			callAdapter.call_dateUpdate,
			callAdapter.CallFile,
			callAdapter.call_create,
			callAdapter.call_estado,
			callAdapter.CallVisibility,
			callAdapter.IdcallLeg
		);
	}
}
