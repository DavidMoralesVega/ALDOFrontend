import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { CreateRequestReportsDto, UpdateRequestReportsDto, RequestReports } from '../entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum RequestReportsActionTypes {
	// create
	REQUESTREPORTS_CREATE_REQUESTED = '[RequestReports] CREATE Requested',
	REQUESTREPORTS_CREATE_LOADED = '[RequestReports] CREATE Loaded',
	REQUESTREPORTS_CREATE_FAILED = '[RequestReports] CREATE Failed',

	// findAll
	REQUESTREPORTS_FIND_ALL_REQUESTED = '[RequestReports] FIND ALL Requested',
	REQUESTREPORTS_FIND_ALL_LOADED = '[RequestReports] FIND ALL Loaded',
	REQUESTREPORTS_FIND_ALL_FAILED = '[RequestReports] FIND ALL Failed',

	// findOne
	REQUESTREPORTS_FIND_ONE_REQUESTED = '[RequestReports] FIND ONE Requested',
	REQUESTREPORTS_FIND_ONE_LOADED = '[RequestReports] FIND ONE Loaded',
	REQUESTREPORTS_FIND_ONE_FAILED = '[RequestReports] FIND ONE Failed',

	// update
	REQUESTREPORTS_UPDATE_REQUESTED = '[RequestReports] UPDATE Requested',
	REQUESTREPORTS_UPDATE_LOADED = '[RequestReports] UPDATE Loaded',
	REQUESTREPORTS_UPDATE_FAILED = '[RequestReports] UPDATE Failed'
}

// create
export const REQUESTREPORTS_CREATE_REQUESTED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const REQUESTREPORTS_CREATE_LOADED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_CREATE_LOADED,
	props<Payload<Response<RequestReports>>>()
);

export const REQUESTREPORTS_CREATE_FAILED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const REQUESTREPORTS_FIND_ALL_REQUESTED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const REQUESTREPORTS_FIND_ALL_LOADED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ALL_LOADED,
	props<Payload<Response<RequestReports[]>>>()
);

export const REQUESTREPORTS_FIND_ALL_FAILED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const REQUESTREPORTS_FIND_ONE_REQUESTED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const REQUESTREPORTS_FIND_ONE_LOADED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ONE_LOADED,
	props<Payload<Response<RequestReports>>>()
);

export const REQUESTREPORTS_FIND_ONE_FAILED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const REQUESTREPORTS_UPDATE_REQUESTED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateRequestReportsDto, string>>()
);

export const REQUESTREPORTS_UPDATE_LOADED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_UPDATE_LOADED,
	props<Payload<Response<RequestReports>>>()
);

export const REQUESTREPORTS_UPDATE_FAILED = createAction(
	RequestReportsActionTypes.REQUESTREPORTS_UPDATE_FAILED,
	props<Payload<Exception>>()
);
