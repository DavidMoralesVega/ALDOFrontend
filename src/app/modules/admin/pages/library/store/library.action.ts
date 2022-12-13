import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Library } from '../entities';
import { UpdateLibraryDto } from '../entities/models/library.model';

export enum LibraryActionTypes {
	// create
	LIBRARY_CREATE_REQUESTED = '[Library] CREATE Requested',
	LIBRARY_CREATE_LOADED = '[Library] CREATE Loaded',
	LIBRARY_CREATE_FAILED = '[Library] CREATE Failed',

	// findAll
	LIBRARY_FIND_ALL_REQUESTED = '[Library] FIND ALL Requested',
	LIBRARY_FIND_ALL_LOADED = '[Library] FIND ALL Loaded',
	LIBRARY_FIND_ALL_FAILED = '[Library] FIND ALL Failed',

	// findOne
	LIBRARY_FIND_ONE_REQUESTED = '[Library] FIND ONE Requested',
	LIBRARY_FIND_ONE_LOADED = '[Library] FIND ONE Loaded',
	LIBRARY_FIND_ONE_FAILED = '[Library] FIND ONE Failed',

	// update
	LIBRARY_UPDATE_REQUESTED = '[Library] UPDATE Requested',
	LIBRARY_UPDATE_LOADED = '[Library] UPDATE Loaded',
	LIBRARY_UPDATE_FAILED = '[Library] UPDATE Failed'
}

// create
export const LIBRARY_CREATE_REQUESTED = createAction(
	LibraryActionTypes.LIBRARY_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const LIBRARY_CREATE_LOADED = createAction(
	LibraryActionTypes.LIBRARY_CREATE_LOADED,
	props<Payload<Response<Library>>>()
);

export const LIBRARY_CREATE_FAILED = createAction(
	LibraryActionTypes.LIBRARY_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const LIBRARY_FIND_ALL_REQUESTED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const LIBRARY_FIND_ALL_LOADED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ALL_LOADED,
	props<Payload<Response<Library[]>>>()
);

export const LIBRARY_FIND_ALL_FAILED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const LIBRARY_FIND_ONE_REQUESTED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const LIBRARY_FIND_ONE_LOADED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ONE_LOADED,
	props<Payload<Response<Library>>>()
);

export const LIBRARY_FIND_ONE_FAILED = createAction(
	LibraryActionTypes.LIBRARY_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const LIBRARY_UPDATE_REQUESTED = createAction(
	LibraryActionTypes.LIBRARY_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateLibraryDto, string>>()
);

export const LIBRARY_UPDATE_LOADED = createAction(
	LibraryActionTypes.LIBRARY_UPDATE_LOADED,
	props<Payload<Response<Library>>>()
);

export const LIBRARY_UPDATE_FAILED = createAction(
	LibraryActionTypes.LIBRARY_UPDATE_FAILED,
	props<Payload<Exception>>()
);
