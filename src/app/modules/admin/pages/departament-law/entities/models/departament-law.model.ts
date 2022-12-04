import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class DepartamentLawAdapter {
	constructor(
		public readonly IdDepartamentaLaw: string,
		public readonly DTTitle: string,
		public readonly DTSummary: string,
		public readonly DTPublicationDate: string,
		public readonly DTIssueDate: string,
		public readonly DTDocumentNumber: string,

		public readonly DTVisibility: boolean,
		public readonly DTState: boolean,
		public readonly DTDateRegister: string
	) {}
}

export type CreateDepartamentLawDto = Omit<
	DepartamentLawAdapter,
	'IdDepartamentaLaw' | 'DTState' | 'DTDateRegister'
>;

export interface UpdateDepartamentLawDto extends Partial<DepartamentLawAdapter> {}

@Injectable()
export class DepartamentLaw implements Adapter<DepartamentLawAdapter> {
	adapter(departamentLawAdapter: DepartamentLawAdapter): DepartamentLawAdapter {
		return new DepartamentLawAdapter(
			departamentLawAdapter.IdDepartamentaLaw,
			departamentLawAdapter.DTTitle,
			departamentLawAdapter.DTSummary,
			departamentLawAdapter.DTPublicationDate,
			departamentLawAdapter.DTIssueDate,
			departamentLawAdapter.DTDocumentNumber,

			departamentLawAdapter.DTVisibility,
			departamentLawAdapter.DTState,
			departamentLawAdapter.DTDateRegister
		);
	}
}
