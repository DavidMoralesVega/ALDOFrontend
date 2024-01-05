import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities';

export class ResolutionAdapter {
	constructor(
		public readonly IdResolution: string,
		public readonly RETitle: string,
		public readonly RESummary: string,
		public readonly REPublicationDate: string,
		public readonly REIssueDate: string,
		public readonly REDocumentNumber: string,
		public readonly REType: string,
		public readonly REFile: any,
		public readonly REVisibility: boolean,
		public readonly REState: boolean,
		public readonly REDateRegister: string,
		public readonly legislatureAdapter?: LegislatureAdapter
	) {}
}

export type CreateResolutionDto = Omit<
	ResolutionAdapter,
	'IdResolution' | 'REState' | 'REDateRegister'
> & {
	readonly IdcallLeg: string;
};

export type UpdateResolutionDto = Partial<ResolutionAdapter> & {
	readonly IdcallLeg?: string;
};

export interface ResolutionForeignAdapter extends ResolutionAdapter {
	readonly legislatura: LegislatureAdapter;
}

@Injectable()
export class Resolution implements Adapter<ResolutionAdapter> {
	adapter(resolutionAdapter: ResolutionAdapter): ResolutionAdapter {
		return new ResolutionAdapter(
			resolutionAdapter.IdResolution,
			resolutionAdapter.RETitle,
			resolutionAdapter.RESummary,
			resolutionAdapter.REPublicationDate,
			resolutionAdapter.REIssueDate,
			resolutionAdapter.REDocumentNumber,
			resolutionAdapter.REType,
			resolutionAdapter.REFile,
			resolutionAdapter.REVisibility,
			resolutionAdapter.REState,
			resolutionAdapter.REDateRegister,
			resolutionAdapter.legislatureAdapter
		);
	}
}
