import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { CreateCallDto, UpdateCallDto, Call } from '../entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum CallActionTypes {
	// create
	CALL_CREATE_REQUESTED = '[Call] CREATE Requested',
	CALL_CREATE_LOADED = '[Call] CREATE Loaded',
	CALL_CREATE_FAILED = '[Call] CREATE Failed',

	// findAll
	CALL_FIND_ALL_REQUESTED = '[Call] FIND ALL Requested',
	CALL_FIND_ALL_LOADED = '[Call] FIND ALL Loaded',
	CALL_FIND_ALL_FAILED = '[Call] FIND ALL Failed',

	// findOne
	CALL_FIND_ONE_REQUESTED = '[Call] FIND ONE Requested',
	CALL_FIND_ONE_LOADED = '[Call] FIND ONE Loaded',
	CALL_FIND_ONE_FAILED = '[Call] FIND ONE Failed',

	// update
	CALL_UPDATE_REQUESTED = '[Call] UPDATE Requested',
	CALL_UPDATE_LOADED = '[Call] UPDATE Loaded',
	CALL_UPDATE_FAILED = '[Call] UPDATE Failed'
}

// create
export const CALL_CREATE_REQUESTED = createAction(
	CallActionTypes.CALL_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const CALL_CREATE_LOADED = createAction(
	CallActionTypes.CALL_CREATE_LOADED,
	props<Payload<Response<Call>>>()
);

export const CALL_CREATE_FAILED = createAction(
	CallActionTypes.CALL_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const CALL_FIND_ALL_REQUESTED = createAction(
	CallActionTypes.CALL_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const CALL_FIND_ALL_LOADED = createAction(
	CallActionTypes.CALL_FIND_ALL_LOADED,
	props<Payload<Response<Call[]>>>()
);

export const CALL_FIND_ALL_FAILED = createAction(
	CallActionTypes.CALL_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const CALL_FIND_ONE_REQUESTED = createAction(
	CallActionTypes.CALL_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const CALL_FIND_ONE_LOADED = createAction(
	CallActionTypes.CALL_FIND_ONE_LOADED,
	props<Payload<Response<Call>>>()
);

export const CALL_FIND_ONE_FAILED = createAction(
	CallActionTypes.CALL_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const CALL_UPDATE_REQUESTED = createAction(
	CallActionTypes.CALL_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateCallDto, string>>()
);

export const CALL_UPDATE_LOADED = createAction(
	CallActionTypes.CALL_UPDATE_LOADED,
	props<Payload<Response<Call>>>()
);

export const CALL_UPDATE_FAILED = createAction(
	CallActionTypes.CALL_UPDATE_FAILED,
	props<Payload<Exception>>()
);
