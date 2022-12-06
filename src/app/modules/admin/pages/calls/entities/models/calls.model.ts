import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class AdmPaisAdapter {
	constructor(
		public readonly pai_id: string,
		public readonly pai_abreviacion: string,
		public readonly pai_descripcion: string,
		public readonly pai_gentilicio: string,
		public readonly pai_region: string,
		public readonly pai_continente: string,
		public readonly pai_estado: boolean,
		public readonly pai_creado: string
	) {}
}

export type CreateAdmPaisDto = Omit<AdmPaisAdapter, 'pai_id' | 'pai_creado' | 'pai_estado'>;

export interface UpdateAdmPaisDto extends Partial<AdmPaisAdapter> {}

@Injectable()
export class AdmPais implements Adapter<AdmPaisAdapter> {
	adapter(admPaisAdapter: AdmPaisAdapter): AdmPaisAdapter {
		return new AdmPaisAdapter(
			admPaisAdapter.pai_id,
			admPaisAdapter.pai_abreviacion,
			admPaisAdapter.pai_descripcion,
			admPaisAdapter.pai_gentilicio,
			admPaisAdapter.pai_region,
			admPaisAdapter.pai_continente,
			admPaisAdapter.pai_estado,
			admPaisAdapter.pai_creado
		);
	}
}
