import { Exception, Pagination, Response } from 'src/app/core/entities';
import { FilesArchive } from '../entities';
import {
	CreateFilesArchiveDto,
	UpdateFilesArchiveDto
} from '../entities/models/file-archive.model';

export interface FilesArchiveState {
	create: {
		createFilesArchiveDto: CreateFilesArchiveDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<FilesArchive> | null;
	};
	findAll: {
		response: Response<FilesArchive[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<FilesArchive> | null;
		id: string | null;
	};
	update: {
		updateFilesArchiveDto: UpdateFilesArchiveDto | FormData | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<FilesArchive> | null;
	};
}

export const filesArchiveInitialState: FilesArchiveState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createFilesArchiveDto: null,
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
		updateFilesArchiveDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
