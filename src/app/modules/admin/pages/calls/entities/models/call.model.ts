import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class CallAdapter {
	constructor(
		public readonly call_id: string,
		public readonly call_title: string,
		public readonly call_hours: string,
		public readonly call_modality: string,
		public readonly call_dateUpdate: Date,
		public readonly call_pdfList: string,
		public readonly call_create: string,
		public readonly call_estado: boolean,
		public readonly CallVisibility: string
	) {}
}

export type CreateCallDto = Omit<CallAdapter, 'call_id' | 'call_create' | 'call_estado'>;

export interface UpdateCallDto extends Partial<CallAdapter> {}

@Injectable()
export class Call implements Adapter<CallAdapter> {
	adapter(callAdapter: CallAdapter): CallAdapter {
		return new CallAdapter(
			callAdapter.call_id,
			callAdapter.call_title,
			callAdapter.call_hours,
			callAdapter.call_modality,
			callAdapter.call_dateUpdate,
			callAdapter.call_pdfList,
			callAdapter.call_create,
			callAdapter.call_estado,
			callAdapter.CallVisibility
		);
	}
}
