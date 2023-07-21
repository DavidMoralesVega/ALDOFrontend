import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { FilesArchive, UpdateFilesArchiveDto } from '../entities/models/file-archive.model';

export enum FilesArchiveActionTypes {
	// create
	FILESARCHIVE_CREATE_REQUESTED = '[FilesArchive] CREATE Requested',
	FILESARCHIVE_CREATE_LOADED = '[FilesArchive] CREATE Loaded',
	FILESARCHIVE_CREATE_FAILED = '[FilesArchive] CREATE Failed',

	// findAll
	FILESARCHIVE_FIND_ALL_REQUESTED = '[FilesArchive] FIND ALL Requested',
	FILESARCHIVE_FIND_ALL_LOADED = '[FilesArchive] FIND ALL Loaded',
	FILESARCHIVE_FIND_ALL_FAILED = '[FilesArchive] FIND ALL Failed',

	// findOne
	FILESARCHIVE_FIND_ONE_REQUESTED = '[FilesArchive] FIND ONE Requested',
	FILESARCHIVE_FIND_ONE_LOADED = '[FilesArchive] FIND ONE Loaded',
	FILESARCHIVE_FIND_ONE_FAILED = '[FilesArchive] FIND ONE Failed',

	// update
	FILESARCHIVE_UPDATE_REQUESTED = '[FilesArchive] UPDATE Requested',
	FILESARCHIVE_UPDATE_LOADED = '[FilesArchive] UPDATE Loaded',
	FILESARCHIVE_UPDATE_FAILED = '[FilesArchive] UPDATE Failed'
}

// create
export const FILESARCHIVE_CREATE_REQUESTED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const FILESARCHIVE_CREATE_LOADED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_CREATE_LOADED,
	props<Payload<Response<FilesArchive>>>()
);

export const FILESARCHIVE_CREATE_FAILED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const FILESARCHIVE_FIND_ALL_REQUESTED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const FILESARCHIVE_FIND_ALL_LOADED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ALL_LOADED,
	props<Payload<Response<FilesArchive[]>>>()
);

export const FILESARCHIVE_FIND_ALL_FAILED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const FILESARCHIVE_FIND_ONE_REQUESTED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const FILESARCHIVE_FIND_ONE_LOADED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ONE_LOADED,
	props<Payload<Response<FilesArchive>>>()
);

export const FILESARCHIVE_FIND_ONE_FAILED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const FILESARCHIVE_UPDATE_REQUESTED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateFilesArchiveDto | FormData, string>>()
);

export const FILESARCHIVE_UPDATE_LOADED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_UPDATE_LOADED,
	props<Payload<Response<FilesArchive>>>()
);

export const FILESARCHIVE_UPDATE_FAILED = createAction(
	FilesArchiveActionTypes.FILESARCHIVE_UPDATE_FAILED,
	props<Payload<Exception>>()
);
