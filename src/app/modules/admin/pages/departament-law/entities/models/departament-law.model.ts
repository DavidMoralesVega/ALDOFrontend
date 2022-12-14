import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities';

export class DepartamentLawAdapter {
	constructor(
		public readonly IdDepartamentaLaw: string,
		public readonly dttitle: string,
		public readonly dtsummary: string,
		public readonly dtpublicationdate: string,
		public readonly dtissueDate: string,
		public readonly DTDocumentNumber: string,
		public readonly dtarea: string,
		public readonly DTFile: any,
		public readonly dtvisibility: boolean,
		public readonly dtstate: boolean,
		public readonly DTDateRegister: string,
		public readonly IddeparLwLeg: string
	) {}
}

export type CreateDepartamentLawDto = Omit<
	DepartamentLawAdapter,
	'IdDepartamentaLaw' | 'dtstate' | 'DTDateRegister'
>;

export interface UpdateDepartamentLawForeignAdapter extends DepartamentLawAdapter {
	readonly legislatura: LegislatureAdapter;
}

export interface UpdateDepartamentLawDto extends Partial<DepartamentLawAdapter> {}

@Injectable()
export class DepartamentLaw implements Adapter<DepartamentLawAdapter> {
	adapter(departamentLawAdapter: DepartamentLawAdapter): DepartamentLawAdapter {
		return new DepartamentLawAdapter(
			departamentLawAdapter.IdDepartamentaLaw,
			departamentLawAdapter.dttitle,
			departamentLawAdapter.dtsummary,
			departamentLawAdapter.dtpublicationdate,
			departamentLawAdapter.dtissueDate,
			departamentLawAdapter.DTDocumentNumber,
			departamentLawAdapter.dtarea,
			departamentLawAdapter.DTFile,
			departamentLawAdapter.dtvisibility,
			departamentLawAdapter.dtstate,
			departamentLawAdapter.DTDateRegister,
			departamentLawAdapter.IddeparLwLeg
		);
	}
}
