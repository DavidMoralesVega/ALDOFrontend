import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class LibraryAdapter {
	constructor(
		public readonly IdLibrary: string,
		public readonly ltitle: string,
		public readonly ldescription: string,
		public readonly lvisibility: string,
		public readonly lcategory: string,
		public readonly lmodule: string,
		public readonly LFile: string,
		public readonly lstate: any,
		public readonly LDateRegister: boolean
	) {}
}

export type CreateLibraryDto = Omit<LibraryAdapter, 'IdLibrary' | 'lstate' | 'LDateRegister'>;

export interface UpdateLibraryDto extends Partial<LibraryAdapter> {}

@Injectable()
export class Library implements Adapter<LibraryAdapter> {
	adapter(libraryAdapter: LibraryAdapter): LibraryAdapter {
		return new LibraryAdapter(
			libraryAdapter.IdLibrary,
			libraryAdapter.ltitle,
			libraryAdapter.ldescription,
			libraryAdapter.lvisibility,
			libraryAdapter.lcategory,
			libraryAdapter.lmodule,
			libraryAdapter.LFile,
			libraryAdapter.lstate,
			libraryAdapter.LDateRegister
		);
	}
}
