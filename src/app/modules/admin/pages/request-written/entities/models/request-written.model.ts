import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities';

export class RequestWrittenAdapter {
	constructor(
		public readonly IdRequestWritten: string,
		public readonly RWTitle: string,
		public readonly RWSummary: string,
		public readonly RWPublicationDate: string,
		public readonly RWIssueDate: string,
		// public readonly RWDocumentNumber: string,
		public readonly RWFile: any,
		public readonly RWVisibility: boolean,
		public readonly RWState: boolean,
		public readonly RWDateRegister: string,
		public readonly legislatureAdapter?: LegislatureAdapter
	) {}
}

export type CreateRequestWrittenDto = Omit<
	RequestWrittenAdapter,
	'IdRequestWritten' | 'RWState' | 'RWDateRegister'
> & {
	readonly IdreqWrLeg: string;
};

export type UpdateRequestWrittenDto = Partial<RequestWrittenAdapter> & {
	readonly IdreqWrLeg?: string;
};

export interface RequestWrittenForeignAdapter extends RequestWrittenAdapter {
	readonly legislatura: LegislatureAdapter;
}

@Injectable()
export class RequestWritten implements Adapter<RequestWrittenAdapter> {
	adapter(requestWrittenAdapter: RequestWrittenAdapter): RequestWrittenAdapter {
		return new RequestWrittenAdapter(
			requestWrittenAdapter.IdRequestWritten,
			requestWrittenAdapter.RWTitle,
			requestWrittenAdapter.RWSummary,
			requestWrittenAdapter.RWPublicationDate,
			requestWrittenAdapter.RWIssueDate,
			// requestWrittenAdapter.RWDocumentNumber,
			requestWrittenAdapter.RWFile,
			requestWrittenAdapter.RWVisibility,
			requestWrittenAdapter.RWState,
			requestWrittenAdapter.RWDateRegister,
			requestWrittenAdapter.legislatureAdapter
		);
	}
}
