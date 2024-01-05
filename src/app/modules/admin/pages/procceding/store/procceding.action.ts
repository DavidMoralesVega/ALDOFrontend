import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { CreateProccedingDto, Procceding, UpdateProccedingDto } from '../entities';

export enum ProccedingActionTypes {
	// create
	PROCCEDING_CREATE_REQUESTED = '[Procceding] CREATE Requested',
	PROCCEDING_CREATE_LOADED = '[Procceding] CREATE Loaded',
	PROCCEDING_CREATE_FAILED = '[Procceding] CREATE Failed',

	// findAll
	PROCCEDING_FIND_ALL_REQUESTED = '[Procceding] FIND ALL Requested',
	PROCCEDING_FIND_ALL_LOADED = '[Procceding] FIND ALL Loaded',
	PROCCEDING_FIND_ALL_FAILED = '[Procceding] FIND ALL Failed',

	// findOne
	PROCCEDING_FIND_ONE_REQUESTED = '[Procceding] FIND ONE Requested',
	PROCCEDING_FIND_ONE_LOADED = '[Procceding] FIND ONE Loaded',
	PROCCEDING_FIND_ONE_FAILED = '[Procceding] FIND ONE Failed',

	// update
	PROCCEDING_UPDATE_REQUESTED = '[Procceding] UPDATE Requested',
	PROCCEDING_UPDATE_LOADED = '[Procceding] UPDATE Loaded',
	PROCCEDING_UPDATE_FAILED = '[Procceding] UPDATE Failed'
}

// create
export const PROCCEDING_CREATE_REQUESTED = createAction(
	ProccedingActionTypes.PROCCEDING_CREATE_REQUESTED,
	props<Payload<CreateProccedingDto>>()
);

export const PROCCEDING_CREATE_LOADED = createAction(
	ProccedingActionTypes.PROCCEDING_CREATE_LOADED,
	props<Payload<Response<Procceding>>>()
);

export const PROCCEDING_CREATE_FAILED = createAction(
	ProccedingActionTypes.PROCCEDING_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const PROCCEDING_FIND_ALL_REQUESTED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const PROCCEDING_FIND_ALL_LOADED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ALL_LOADED,
	props<Payload<Response<Procceding[]>>>()
);

export const PROCCEDING_FIND_ALL_FAILED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const PROCCEDING_FIND_ONE_REQUESTED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const PROCCEDING_FIND_ONE_LOADED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ONE_LOADED,
	props<Payload<Response<Procceding>>>()
);

export const PROCCEDING_FIND_ONE_FAILED = createAction(
	ProccedingActionTypes.PROCCEDING_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const PROCCEDING_UPDATE_REQUESTED = createAction(
	ProccedingActionTypes.PROCCEDING_UPDATE_REQUESTED,
	props<PayloadUpdate<FormData | UpdateProccedingDto, string>>()
);

export const PROCCEDING_UPDATE_LOADED = createAction(
	ProccedingActionTypes.PROCCEDING_UPDATE_LOADED,
	props<Payload<Response<Procceding>>>()
);

export const PROCCEDING_UPDATE_FAILED = createAction(
	ProccedingActionTypes.PROCCEDING_UPDATE_FAILED,
	props<Payload<Exception>>()
);
