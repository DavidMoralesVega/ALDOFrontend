import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class RequestReportsAdapter {
	constructor(
		public readonly reqR_id: string,
		public readonly reqR_num: string,
		public readonly reqR_petitioner: number,
		public readonly reqR_addressee: string,
		public readonly reqR_abstract: string,
		public readonly reqR_listPdf: string,
		public readonly reqR_management: string,
		public readonly reqR_condition: boolean,
		public readonly reqR_create: string
	) {}
}

export type CreateRequestReportsDto = Omit<
	RequestReportsAdapter,
	'reqR_id' | 'reqR_create' | 'reqR_condition'
>;

export interface UpdateRequestReportsDto extends Partial<RequestReportsAdapter> {}

@Injectable()
export class RequestReports implements Adapter<RequestReportsAdapter> {
	adapter(requestReportsAdapter: RequestReportsAdapter): RequestReportsAdapter {
		return new RequestReportsAdapter(
			requestReportsAdapter.reqR_id,
			requestReportsAdapter.reqR_num,
			requestReportsAdapter.reqR_petitioner,
			requestReportsAdapter.reqR_addressee,
			requestReportsAdapter.reqR_abstract,
			requestReportsAdapter.reqR_listPdf,
			requestReportsAdapter.reqR_management,
			requestReportsAdapter.reqR_condition,
			requestReportsAdapter.reqR_create
		);
	}
}
