import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import {
	CreateLegislatureDto,
	UpdateLegislatureDto,
	Legislature,
	LegislatureAdapter
} from '../entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum LegislatureActionTypes {
	// create
	LEGISLATURE_CREATE_REQUESTED = '[Legislature] CREATE Requested',
	LEGISLATURE_CREATE_LOADED = '[Legislature] CREATE Loaded',
	LEGISLATURE_CREATE_FAILED = '[Legislature] CREATE Failed',

	// findAll
	LEGISLATURE_FIND_ALL_REQUESTED = '[Legislature] FIND ALL Requested',
	LEGISLATURE_FIND_ALL_LOADED = '[Legislature] FIND ALL Loaded',
	LEGISLATURE_FIND_ALL_FAILED = '[Legislature] FIND ALL Failed',

	// findOne
	LEGISLATURE_FIND_ONE_REQUESTED = '[Legislature] FIND ONE Requested',
	LEGISLATURE_FIND_ONE_LOADED = '[Legislature] FIND ONE Loaded',
	LEGISLATURE_FIND_ONE_FAILED = '[Legislature] FIND ONE Failed',

	// update
	LEGISLATURE_UPDATE_REQUESTED = '[Legislature] UPDATE Requested',
	LEGISLATURE_UPDATE_LOADED = '[Legislature] UPDATE Loaded',
	LEGISLATURE_UPDATE_FAILED = '[Legislature] UPDATE Failed'
}

// create
export const LEGISLATURE_CREATE_REQUESTED = createAction(
	LegislatureActionTypes.LEGISLATURE_CREATE_REQUESTED,
	props<Payload<CreateLegislatureDto>>()
);

export const LEGISLATURE_CREATE_LOADED = createAction(
	LegislatureActionTypes.LEGISLATURE_CREATE_LOADED,
	props<Payload<Response<Legislature>>>()
);

export const LEGISLATURE_CREATE_FAILED = createAction(
	LegislatureActionTypes.LEGISLATURE_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const LEGISLATURE_FIND_ALL_REQUESTED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const LEGISLATURE_FIND_ALL_LOADED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ALL_LOADED,
	props<Payload<Response<LegislatureAdapter[]>>>()
);

export const LEGISLATURE_FIND_ALL_FAILED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const LEGISLATURE_FIND_ONE_REQUESTED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const LEGISLATURE_FIND_ONE_LOADED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ONE_LOADED,
	props<Payload<Response<Legislature>>>()
);

export const LEGISLATURE_FIND_ONE_FAILED = createAction(
	LegislatureActionTypes.LEGISLATURE_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const LEGISLATURE_UPDATE_REQUESTED = createAction(
	LegislatureActionTypes.LEGISLATURE_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateLegislatureDto, string>>()
);

export const LEGISLATURE_UPDATE_LOADED = createAction(
	LegislatureActionTypes.LEGISLATURE_UPDATE_LOADED,
	props<Payload<Response<Legislature>>>()
);

export const LEGISLATURE_UPDATE_FAILED = createAction(
	LegislatureActionTypes.LEGISLATURE_UPDATE_FAILED,
	props<Payload<Exception>>()
);
