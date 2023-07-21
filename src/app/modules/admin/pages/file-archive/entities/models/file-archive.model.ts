import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureAdapter } from '../../../legislature/entities';

export class FilesArchiveAdapter {
	constructor(
		public readonly arch_id: string,
		public readonly arch_code: string,
		public readonly arch_name: string,
		public readonly arch_File: any,
		public readonly arch_State: boolean,
		public readonly arch_creado: string,
		public readonly IdresolLeg: string
	) {}
}

export type CreateFilesArchiveDto = Omit<
	FilesArchiveAdapter,
	'arch_id' | 'arch_State' | 'arch_creado'
>;

export interface FilesArchiveForeignAdapter extends FilesArchiveAdapter {
	readonly legislatura: LegislatureAdapter;
}

export interface UpdateFilesArchiveDto extends Partial<FilesArchiveAdapter> {}

@Injectable()
export class FilesArchive implements Adapter<FilesArchiveAdapter> {
	adapter(filesArchiveAdapter: FilesArchiveAdapter): FilesArchiveAdapter {
		return new FilesArchiveAdapter(
			filesArchiveAdapter.arch_id,
			filesArchiveAdapter.arch_code,
			filesArchiveAdapter.arch_name,
			filesArchiveAdapter.arch_File,
			filesArchiveAdapter.arch_State,
			filesArchiveAdapter.arch_creado,
			filesArchiveAdapter.IdresolLeg
		);
	}
}
