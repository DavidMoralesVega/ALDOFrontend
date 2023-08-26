import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities/models/legislature.model';

export class RequestReportsAdapter {
	constructor(
		public readonly reqR_id: string,
		public readonly reqR_title: string,
		public readonly reqR_abstract: number,
		public readonly reqR_state: boolean,
		public readonly reqRFile: string,
		public readonly reqRVideo: string,
		public readonly reqR_create: string
	) {}
}

export interface CreateRequestReportsDto
	extends Omit<RequestReportsAdapter, 'reqR_id' | 'reqR_create' | 'reqR_state'> {
	readonly IdreqRLeg: string;
}

export interface UpdateRequestReportsForeignAdapter extends RequestReportsAdapter {
	readonly legislatura: LegislatureAdapter;
}

export interface UpdateRequestReportsDto extends Partial<RequestReportsAdapter> {
	readonly IdreqRLeg?: string;
}

@Injectable()
export class RequestReports implements Adapter<RequestReportsAdapter> {
	adapter(requestReportsAdapter: RequestReportsAdapter): RequestReportsAdapter {
		return new RequestReportsAdapter(
			requestReportsAdapter.reqR_id,
			requestReportsAdapter.reqR_title,
			requestReportsAdapter.reqR_abstract,
			requestReportsAdapter.reqR_state,
			requestReportsAdapter.reqRFile,
			requestReportsAdapter.reqRVideo,
			requestReportsAdapter.reqR_create
		);
	}
}
