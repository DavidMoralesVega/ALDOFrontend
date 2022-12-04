import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { UpdateDepartamentLawDto } from '../entities';
import { CreateDepartamentLawDto, DepartamentLaw } from '../entities/models/departament-law.model';

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
	DEPARTAMENTLAW_UPDATE_FAILED = '[DepartamentLaw] UPDATE Failed'
}

// create
export const DEPARTAMENTLAW_CREATE_REQUESTED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_CREATE_REQUESTED,
	props<Payload<CreateDepartamentLawDto>>()
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
	props<Payload<Response<DepartamentLaw[]>>>()
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
	props<PayloadUpdate<UpdateDepartamentLawDto, string>>()
);

export const DEPARTAMENTLAW_UPDATE_LOADED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_UPDATE_LOADED,
	props<Payload<Response<DepartamentLaw>>>()
);

export const DEPARTAMENTLAW_UPDATE_FAILED = createAction(
	DepartamentLawActionTypes.DEPARTAMENTLAW_UPDATE_FAILED,
	props<Payload<Exception>>()
);
