import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { UpdateDepartamentLawDto } from '../entities';
import { DepartamentLaw, DepartamentLawAdapter } from '../entities/models/departament-law.model';
import { search } from '../../../../../core/entities/interfaces/search.interface';

export enum DepartamentLawActionTypes {
	// create
	DEPARTAMENTLAW_CREATE_REQUESTED = '[DepartamentLaw] CREATE Requested',
	DEPARTAMENTLAW_CREATE_LOADED = '[DepartamentLaw] CREATE Loaded',
	DEPARTAMENTLAW_CREATE_FAILED = '[DepartamentLaw] CREATE Failed',

	// findAll
	DEPARTAMENTLAW_FIND_ALL_REQUESTED = '[DepartamentLaw] FIND ALL Requested',
	DEPARTAMENTLAW_FIND_ALL_LOADED = '[DepartamentLaw] FIND ALL Loaded',
	DEPARTAMENTLAW_FIND_ALL_FAILED = '[DepartamentLaw] FIND ALL Failed',

	// findOne
	DEPARTAMENTLAW_FIND_ONE_REQUESTED = '[DepartamentLaw] FIND ONE Requested',
	DEPARTAMENTLAW_FIND_ONE_LOADED = '[DepartamentLaw] FIND ONE Loaded',
	DEPARTAMENTLAW_FIND_ONE_FAILED = '[DepartamentLaw] FIND ONE Failed',

	// update
	DEPARTAMENTLAW_UPDATE_REQUESTED = '[DepartamentLaw] UPDATE Requested',
	DEPARTAMENTLAW_UPDATE_LOADED = '[DepartamentLaw] UPDATE Loaded',
	DEPARTAMENTLAW_UPDATE_FAILED = '[DepartamentLaw] UPDATE Failed',

	// search
	DEPARTAMENTLAW_SEARCH_REQUESTED = '[DepartamentLaw] SEARCH Requested',
	DEPARTAMENTLAW_SEARCH_LOADED = '[DepartamentLaw] SEARCH Loaded',
	DEPARTAMENTLAW_SEARCH_FAILED = '[DepartamentLaw] SEARCH Failed',

	// search advanced
	DEPARTAMENTLAW_SEARCHADVANCED_REQUESTED = '[DepartamentLaw] SEARCHADVANCED Requested',
	DEPARTAMENTLAW_SEARCHADVANCED_LOADED = '[DepartamentLaw] SEARCHADVANCED Loaded',
	DEPARTAMENTLAW_SEARCHADVANCED_FAILED = '[DepartamentLaw] SEARCHADVANCED Failed'
}

// create
export const DEPARTAMENTLAW_CREATE_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const DEPARTAMENTLAW_CREATE_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_CREATE_LOADED,
	props<Payload<Response<DepartamentLaw>>>()
);

export const DEPARTAMENTLAW_CREATE_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const DEPARTAMENTLAW_FIND_ALL_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const DEPARTAMENTLAW_FIND_ALL_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ALL_LOADED,
	props<Payload<Response<DepartamentLawAdapter[]>>>()
);

export const DEPARTAMENTLAW_FIND_ALL_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const DEPARTAMENTLAW_FIND_ONE_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const DEPARTAMENTLAW_FIND_ONE_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ONE_LOADED,
	props<Payload<Response<DepartamentLaw>>>()
);

export const DEPARTAMENTLAW_FIND_ONE_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const DEPARTAMENTLAW_UPDATE_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_UPDATE_REQUESTED,
	props<PayloadUpdate<FormData | UpdateDepartamentLawDto, string>>()
);

export const DEPARTAMENTLAW_UPDATE_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_UPDATE_LOADED,
	props<Payload<Response<DepartamentLaw>>>()
);

export const DEPARTAMENTLAW_UPDATE_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_UPDATE_FAILED,
	props<Payload<Exception>>()
);

// SEARCH
export const DEPARTAMENTLAW_SEARCH_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCH_REQUESTED,
	props<Payload<search>>()
);

export const DEPARTAMENTLAW_SEARCH_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCH_LOADED,
	props<Payload<Response<DepartamentLaw[]>>>()
);

export const DEPARTAMENTLAW_SEARCH_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCH_FAILED,
	props<Payload<Exception>>()
);
// SEARCH ADVANCED

export const DEPARTAMENTLAW_SEARCHADVANCED_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCHADVANCED_REQUESTED,
	props<Payload<search>>()
);

export const DEPARTAMENTLAW_SEARCHADVANCED_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCHADVANCED_LOADED,
	props<Payload<Response<DepartamentLaw[]>>>()
);

export const DEPARTAMENTLAW_SEARCHADVANCED_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_SEARCHADVANCED_FAILED,
	props<Payload<Exception>>()
);
