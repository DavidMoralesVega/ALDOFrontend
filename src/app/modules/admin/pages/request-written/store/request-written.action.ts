import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import {
	CreateRequestWrittenDto,
	RequestWritten,
	UpdateRequestWrittenDto
} from '../entities/models/request-written.model';

export enum RequestWrittenActionTypes {
	// create
	REQUESTWRITTEN_CREATE_REQUESTED = '[RequestWritten] CREATE Requested',
	REQUESTWRITTEN_CREATE_LOADED = '[RequestWritten] CREATE Loaded',
	REQUESTWRITTEN_CREATE_FAILED = '[RequestWritten] CREATE Failed',

	// findAll
	REQUESTWRITTEN_FIND_ALL_REQUESTED = '[RequestWritten] FIND ALL Requested',
	REQUESTWRITTEN_FIND_ALL_LOADED = '[RequestWritten] FIND ALL Loaded',
	REQUESTWRITTEN_FIND_ALL_FAILED = '[RequestWritten] FIND ALL Failed',

	// findOne
	REQUESTWRITTEN_FIND_ONE_REQUESTED = '[RequestWritten] FIND ONE Requested',
	REQUESTWRITTEN_FIND_ONE_LOADED = '[RequestWritten] FIND ONE Loaded',
	REQUESTWRITTEN_FIND_ONE_FAILED = '[RequestWritten] FIND ONE Failed',

	// update
	REQUESTWRITTEN_UPDATE_REQUESTED = '[RequestWritten] UPDATE Requested',
	REQUESTWRITTEN_UPDATE_LOADED = '[RequestWritten] UPDATE Loaded',
	REQUESTWRITTEN_UPDATE_FAILED = '[RequestWritten] UPDATE Failed'
}

// create
export const REQUESTWRITTEN_CREATE_REQUESTED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_CREATE_REQUESTED,
	props<Payload<CreateRequestWrittenDto>>()
);

export const REQUESTWRITTEN_CREATE_LOADED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_CREATE_LOADED,
	props<Payload<Response<RequestWritten>>>()
);

export const REQUESTWRITTEN_CREATE_FAILED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const REQUESTWRITTEN_FIND_ALL_REQUESTED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const REQUESTWRITTEN_FIND_ALL_LOADED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ALL_LOADED,
	props<Payload<Response<RequestWritten[]>>>()
);

export const REQUESTWRITTEN_FIND_ALL_FAILED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const REQUESTWRITTEN_FIND_ONE_REQUESTED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const REQUESTWRITTEN_FIND_ONE_LOADED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ONE_LOADED,
	props<Payload<Response<RequestWritten>>>()
);

export const REQUESTWRITTEN_FIND_ONE_FAILED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const REQUESTWRITTEN_UPDATE_REQUESTED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateRequestWrittenDto | CreateRequestWrittenDto, string>>()
);

export const REQUESTWRITTEN_UPDATE_LOADED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_UPDATE_LOADED,
	props<Payload<Response<RequestWritten>>>()
);

export const REQUESTWRITTEN_UPDATE_FAILED = createAction(
	RequestWrittenActionTypes.REQUESTWRITTEN_UPDATE_FAILED,
	props<Payload<Exception>>()
);
