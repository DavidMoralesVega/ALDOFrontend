import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class LegislatureAdapter {
	constructor(
		public readonly IdLegislatura: string,
		public readonly LegDescripcion: string,
		public readonly LegEstado: boolean,
		public readonly LeDateRegister: Date
	) {}
}

export type CreateLegislatureDto = Omit<
	LegislatureAdapter,
	'IdLegislatura' | 'LegEstado' | 'LeDateRegister'
>;

export interface UpdateLegislatureDto extends Partial<LegislatureAdapter> {}

@Injectable()
export class Legislature implements Adapter<LegislatureAdapter> {
	adapter(legislatureAdapter: LegislatureAdapter): LegislatureAdapter {
		return new LegislatureAdapter(
			legislatureAdapter.IdLegislatura,
			legislatureAdapter.LegDescripcion,
			legislatureAdapter.LegEstado,
			legislatureAdapter.LeDateRegister
		);
	}
}
