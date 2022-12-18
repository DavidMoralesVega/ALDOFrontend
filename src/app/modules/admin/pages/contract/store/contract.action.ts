import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Contract, UpdateContractDto } from '../entities';

export enum ContractActionTypes {
	// create
	CONTRACT_CREATE_REQUESTED = '[Contract] CREATE Requested',
	CONTRACT_CREATE_LOADED = '[Contract] CREATE Loaded',
	CONTRACT_CREATE_FAILED = '[Contract] CREATE Failed',

	// findAll
	CONTRACT_FIND_ALL_REQUESTED = '[Contract] FIND ALL Requested',
	CONTRACT_FIND_ALL_LOADED = '[Contract] FIND ALL Loaded',
	CONTRACT_FIND_ALL_FAILED = '[Contract] FIND ALL Failed',

	// findOne
	CONTRACT_FIND_ONE_REQUESTED = '[Contract] FIND ONE Requested',
	CONTRACT_FIND_ONE_LOADED = '[Contract] FIND ONE Loaded',
	CONTRACT_FIND_ONE_FAILED = '[Contract] FIND ONE Failed',

	// update
	CONTRACT_UPDATE_REQUESTED = '[Contract] UPDATE Requested',
	CONTRACT_UPDATE_LOADED = '[Contract] UPDATE Loaded',
	CONTRACT_UPDATE_FAILED = '[Contract] UPDATE Failed'
}

// create
export const CONTRACT_CREATE_REQUESTED = createAction(
	ContractActionTypes.CONTRACT_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const CONTRACT_CREATE_LOADED = createAction(
	ContractActionTypes.CONTRACT_CREATE_LOADED,
	props<Payload<Response<Contract>>>()
);

export const CONTRACT_CREATE_FAILED = createAction(
	ContractActionTypes.CONTRACT_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const CONTRACT_FIND_ALL_REQUESTED = createAction(
	ContractActionTypes.CONTRACT_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const CONTRACT_FIND_ALL_LOADED = createAction(
	ContractActionTypes.CONTRACT_FIND_ALL_LOADED,
	props<Payload<Response<Contract[]>>>()
);

export const CONTRACT_FIND_ALL_FAILED = createAction(
	ContractActionTypes.CONTRACT_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const CONTRACT_FIND_ONE_REQUESTED = createAction(
	ContractActionTypes.CONTRACT_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const CONTRACT_FIND_ONE_LOADED = createAction(
	ContractActionTypes.CONTRACT_FIND_ONE_LOADED,
	props<Payload<Response<Contract>>>()
);

export const CONTRACT_FIND_ONE_FAILED = createAction(
	ContractActionTypes.CONTRACT_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const CONTRACT_UPDATE_REQUESTED = createAction(
	ContractActionTypes.CONTRACT_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateContractDto, string>>()
);

export const CONTRACT_UPDATE_LOADED = createAction(
	ContractActionTypes.CONTRACT_UPDATE_LOADED,
	props<Payload<Response<Contract>>>()
);

export const CONTRACT_UPDATE_FAILED = createAction(
	ContractActionTypes.CONTRACT_UPDATE_FAILED,
	props<Payload<Exception>>()
);
