import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Recognition, UpdateRecognitionDto } from '../entities';

export enum RecognitionActionTypes {
	// create
	RECOGNITION_CREATE_REQUESTED = '[Recognition] CREATE Requested',
	RECOGNITION_CREATE_LOADED = '[Recognition] CREATE Loaded',
	RECOGNITION_CREATE_FAILED = '[Recognition] CREATE Failed',

	// findAll
	RECOGNITION_FIND_ALL_REQUESTED = '[Recognition] FIND ALL Requested',
	RECOGNITION_FIND_ALL_LOADED = '[Recognition] FIND ALL Loaded',
	RECOGNITION_FIND_ALL_FAILED = '[Recognition] FIND ALL Failed',

	// findOne
	RECOGNITION_FIND_ONE_REQUESTED = '[Recognition] FIND ONE Requested',
	RECOGNITION_FIND_ONE_LOADED = '[Recognition] FIND ONE Loaded',
	RECOGNITION_FIND_ONE_FAILED = '[Recognition] FIND ONE Failed',

	// update
	RECOGNITION_UPDATE_REQUESTED = '[Recognition] UPDATE Requested',
	RECOGNITION_UPDATE_LOADED = '[Recognition] UPDATE Loaded',
	RECOGNITION_UPDATE_FAILED = '[Recognition] UPDATE Failed'
}

// create
export const RECOGNITION_CREATE_REQUESTED = createAction(
	RecognitionActionTypes.RECOGNITION_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const RECOGNITION_CREATE_LOADED = createAction(
	RecognitionActionTypes.RECOGNITION_CREATE_LOADED,
	props<Payload<Response<Recognition>>>()
);

export const RECOGNITION_CREATE_FAILED = createAction(
	RecognitionActionTypes.RECOGNITION_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const RECOGNITION_FIND_ALL_REQUESTED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const RECOGNITION_FIND_ALL_LOADED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ALL_LOADED,
	props<Payload<Response<Recognition[]>>>()
);

export const RECOGNITION_FIND_ALL_FAILED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const RECOGNITION_FIND_ONE_REQUESTED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const RECOGNITION_FIND_ONE_LOADED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ONE_LOADED,
	props<Payload<Response<Recognition>>>()
);

export const RECOGNITION_FIND_ONE_FAILED = createAction(
	RecognitionActionTypes.RECOGNITION_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const RECOGNITION_UPDATE_REQUESTED = createAction(
	RecognitionActionTypes.RECOGNITION_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateRecognitionDto, string>>()
);

export const RECOGNITION_UPDATE_LOADED = createAction(
	RecognitionActionTypes.RECOGNITION_UPDATE_LOADED,
	props<Payload<Response<Recognition>>>()
);

export const RECOGNITION_UPDATE_FAILED = createAction(
	RecognitionActionTypes.RECOGNITION_UPDATE_FAILED,
	props<Payload<Exception>>()
);
