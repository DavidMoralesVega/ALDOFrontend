import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Resolution, UpdateResolutionDto } from '../entities/models/resolutions.model';

export enum ResolutionActionTypes {
	// create
	RESOLUTION_CREATE_REQUESTED = '[Resolution] CREATE Requested',
	RESOLUTION_CREATE_LOADED = '[Resolution] CREATE Loaded',
	RESOLUTION_CREATE_FAILED = '[Resolution] CREATE Failed',

	// findAll
	RESOLUTION_FIND_ALL_REQUESTED = '[Resolution] FIND ALL Requested',
	RESOLUTION_FIND_ALL_LOADED = '[Resolution] FIND ALL Loaded',
	RESOLUTION_FIND_ALL_FAILED = '[Resolution] FIND ALL Failed',

	// findOne
	RESOLUTION_FIND_ONE_REQUESTED = '[Resolution] FIND ONE Requested',
	RESOLUTION_FIND_ONE_LOADED = '[Resolution] FIND ONE Loaded',
	RESOLUTION_FIND_ONE_FAILED = '[Resolution] FIND ONE Failed',

	// update
	RESOLUTION_UPDATE_REQUESTED = '[Resolution] UPDATE Requested',
	RESOLUTION_UPDATE_LOADED = '[Resolution] UPDATE Loaded',
	RESOLUTION_UPDATE_FAILED = '[Resolution] UPDATE Failed'
}

// create
export const RESOLUTION_CREATE_REQUESTED = createAction(
	ResolutionActionTypes.RESOLUTION_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const RESOLUTION_CREATE_LOADED = createAction(
	ResolutionActionTypes.RESOLUTION_CREATE_LOADED,
	props<Payload<Response<Resolution>>>()
);

export const RESOLUTION_CREATE_FAILED = createAction(
	ResolutionActionTypes.RESOLUTION_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const RESOLUTION_FIND_ALL_REQUESTED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const RESOLUTION_FIND_ALL_LOADED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ALL_LOADED,
	props<Payload<Response<Resolution[]>>>()
);

export const RESOLUTION_FIND_ALL_FAILED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const RESOLUTION_FIND_ONE_REQUESTED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const RESOLUTION_FIND_ONE_LOADED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ONE_LOADED,
	props<Payload<Response<Resolution>>>()
);

export const RESOLUTION_FIND_ONE_FAILED = createAction(
	ResolutionActionTypes.RESOLUTION_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const RESOLUTION_UPDATE_REQUESTED = createAction(
	ResolutionActionTypes.RESOLUTION_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateResolutionDto | FormData, string>>()
);

export const RESOLUTION_UPDATE_LOADED = createAction(
	ResolutionActionTypes.RESOLUTION_UPDATE_LOADED,
	props<Payload<Response<Resolution>>>()
);

export const RESOLUTION_UPDATE_FAILED = createAction(
	ResolutionActionTypes.RESOLUTION_UPDATE_FAILED,
	props<Payload<Exception>>()
);
