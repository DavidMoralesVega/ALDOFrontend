import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Library } from '../entities';
import { UpdateLibraryDto } from '../entities/models/library.model';
import { SearchLibrary } from '../../../../../core/entities/interfaces/searchLibrary.interface';

export interface LibraryState {
	create: {
		createLibraryDto: FormData | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Library> | null;
	};
	findAll: {
		response: Response<Library[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Library> | null;
		id: string | null;
	};
	update: {
		updateLibraryDto: UpdateLibraryDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Library> | null;
	};
	search: {
		response: Response<Library[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		search: SearchLibrary | null;
	};
}

export const libraryInitialState: LibraryState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createLibraryDto: null,
		exception: null,
		isLoading: false,
		response: null
	},
	findOne: {
		exception: null,
		isLoading: false,
		response: null,
		id: null
	},
	update: {
		updateLibraryDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	},
	search: {
		response: null,
		exception: null,
		isLoading: false,
		search: null
	}
};
