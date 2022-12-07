import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities';

export class ContractAdapter {
	constructor(
		public readonly IdContract: string,
		public readonly CTTitle: string,
		public readonly CTSummary: string,
		public readonly CTPublicationDate: string,
		public readonly CTIssueDate: string,
		public readonly CTDocumentNumber: string,
		public readonly CTType: string,
		public readonly CTFile: any,
		public readonly CTVisibility: boolean,
		public readonly CTState: boolean,
		public readonly CTDateRegister: string
	) {}
}

export type CreateContractDto = Omit<ContractAdapter, 'IdContract' | 'CTState' | 'CTDateRegister'>;

export interface UpdateContractDto extends Partial<ContractAdapter> {}

@Injectable()
export class Contract implements Adapter<ContractAdapter> {
	adapter(contractAdapter: ContractAdapter): ContractAdapter {
		return new ContractAdapter(
			contractAdapter.IdContract,
			contractAdapter.CTTitle,
			contractAdapter.CTSummary,
			contractAdapter.CTPublicationDate,
			contractAdapter.CTIssueDate,
			contractAdapter.CTDocumentNumber,
			contractAdapter.CTType,
			contractAdapter.CTFile,
			contractAdapter.CTVisibility,
			contractAdapter.CTState,
			contractAdapter.CTDateRegister
		);
	}
}
