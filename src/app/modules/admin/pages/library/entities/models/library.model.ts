import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class LibraryAdapter {
	constructor(
		public readonly IdLibrary: string,
		public readonly LTitle: string,
		public readonly LDescription: string,
		public readonly LVisibility: string,
		public readonly LCategory: string,
		public readonly LModule: string,
		public readonly LFile: string,
		public readonly LState: any,
		public readonly LDateRegister: boolean
	) {}
}

export type CreateLibraryDto = Omit<LibraryAdapter, 'IdLibrary' | 'LState' | 'LDateRegister'>;

export interface UpdateLibraryDto extends Partial<LibraryAdapter> {}

@Injectable()
export class Library implements Adapter<LibraryAdapter> {
	adapter(libraryAdapter: LibraryAdapter): LibraryAdapter {
		return new LibraryAdapter(
			libraryAdapter.IdLibrary,
			libraryAdapter.LTitle,
			libraryAdapter.LDescription,
			libraryAdapter.LVisibility,
			libraryAdapter.LCategory,
			libraryAdapter.LModule,
			libraryAdapter.LFile,
			libraryAdapter.LState,
			libraryAdapter.LDateRegister
		);
	}
}
