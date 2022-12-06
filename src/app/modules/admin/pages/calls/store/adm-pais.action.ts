import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { CreateAdmPaisDto } from '../entities';
import { AdmPais, UpdateAdmPaisDto } from '../entities/models/adm-pais.model';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum AdmPaisActionTypes {
	// create
	ADMPAIS_CREATE_REQUESTED = '[AdmPais] CREATE Requested',
	ADMPAIS_CREATE_LOADED = '[AdmPais] CREATE Loaded',
	ADMPAIS_CREATE_FAILED = '[AdmPais] CREATE Failed',

	// findAll
	ADMPAIS_FIND_ALL_REQUESTED = '[AdmPais] FIND ALL Requested',
	ADMPAIS_FIND_ALL_LOADED = '[AdmPais] FIND ALL Loaded',
	ADMPAIS_FIND_ALL_FAILED = '[AdmPais] FIND ALL Failed',

	// findOne
	ADMPAIS_FIND_ONE_REQUESTED = '[AdmPais] FIND ONE Requested',
	ADMPAIS_FIND_ONE_LOADED = '[AdmPais] FIND ONE Loaded',
	ADMPAIS_FIND_ONE_FAILED = '[AdmPais] FIND ONE Failed',

	// update
	ADMPAIS_UPDATE_REQUESTED = '[AdmPais] UPDATE Requested',
	ADMPAIS_UPDATE_LOADED = '[AdmPais] UPDATE Loaded',
	ADMPAIS_UPDATE_FAILED = '[AdmPais] UPDATE Failed'
}

// create
export const ADMPAIS_CREATE_REQUESTED = createAction(
	AdmPaisActionTypes.ADMPAIS_CREATE_REQUESTED,
	props<Payload<CreateAdmPaisDto>>()
);

export const ADMPAIS_CREATE_LOADED = createAction(
	AdmPaisActionTypes.ADMPAIS_CREATE_LOADED,
	props<Payload<Response<AdmPais>>>()
);

export const ADMPAIS_CREATE_FAILED = createAction(
	AdmPaisActionTypes.ADMPAIS_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const ADMPAIS_FIND_ALL_REQUESTED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const ADMPAIS_FIND_ALL_LOADED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ALL_LOADED,
	props<Payload<Response<AdmPais[]>>>()
);

export const ADMPAIS_FIND_ALL_FAILED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const ADMPAIS_FIND_ONE_REQUESTED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const ADMPAIS_FIND_ONE_LOADED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ONE_LOADED,
	props<Payload<Response<AdmPais>>>()
);

export const ADMPAIS_FIND_ONE_FAILED = createAction(
	AdmPaisActionTypes.ADMPAIS_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const ADMPAIS_UPDATE_REQUESTED = createAction(
	AdmPaisActionTypes.ADMPAIS_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateAdmPaisDto, string>>()
);

export const ADMPAIS_UPDATE_LOADED = createAction(
	AdmPaisActionTypes.ADMPAIS_UPDATE_LOADED,
	props<Payload<Response<AdmPais>>>()
);

export const ADMPAIS_UPDATE_FAILED = createAction(
	AdmPaisActionTypes.ADMPAIS_UPDATE_FAILED,
	props<Payload<Exception>>()
);
