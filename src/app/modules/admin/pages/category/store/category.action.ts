import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { CreateCategoryDto, UpdateCategoryDto, Category } from '../entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum CategoryActionTypes {
	// create
	CATEGORY_CREATE_REQUESTED = '[Category] CREATE Requested',
	CATEGORY_CREATE_LOADED = '[Category] CREATE Loaded',
	CATEGORY_CREATE_FAILED = '[Category] CREATE Failed',

	// findAll
	CATEGORY_FIND_ALL_REQUESTED = '[Category] FIND ALL Requested',
	CATEGORY_FIND_ALL_LOADED = '[Category] FIND ALL Loaded',
	CATEGORY_FIND_ALL_FAILED = '[Category] FIND ALL Failed',

	// findOne
	CATEGORY_FIND_ONE_REQUESTED = '[Category] FIND ONE Requested',
	CATEGORY_FIND_ONE_LOADED = '[Category] FIND ONE Loaded',
	CATEGORY_FIND_ONE_FAILED = '[Category] FIND ONE Failed',

	// update
	CATEGORY_UPDATE_REQUESTED = '[Category] UPDATE Requested',
	CATEGORY_UPDATE_LOADED = '[Category] UPDATE Loaded',
	CATEGORY_UPDATE_FAILED = '[Category] UPDATE Failed'
}

// create
export const CATEGORY_CREATE_REQUESTED = createAction(
	CategoryActionTypes.CATEGORY_CREATE_REQUESTED,
	props<Payload<CreateCategoryDto>>()
);

export const CATEGORY_CREATE_LOADED = createAction(
	CategoryActionTypes.CATEGORY_CREATE_LOADED,
	props<Payload<Response<Category>>>()
);

export const CATEGORY_CREATE_FAILED = createAction(
	CategoryActionTypes.CATEGORY_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const CATEGORY_FIND_ALL_REQUESTED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const CATEGORY_FIND_ALL_LOADED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ALL_LOADED,
	props<Payload<Response<Category[]>>>()
);

export const CATEGORY_FIND_ALL_FAILED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const CATEGORY_FIND_ONE_REQUESTED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const CATEGORY_FIND_ONE_LOADED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ONE_LOADED,
	props<Payload<Response<Category>>>()
);

export const CATEGORY_FIND_ONE_FAILED = createAction(
	CategoryActionTypes.CATEGORY_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const CATEGORY_UPDATE_REQUESTED = createAction(
	CategoryActionTypes.CATEGORY_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateCategoryDto, string>>()
);

export const CATEGORY_UPDATE_LOADED = createAction(
	CategoryActionTypes.CATEGORY_UPDATE_LOADED,
	props<Payload<Response<Category>>>()
);

export const CATEGORY_UPDATE_FAILED = createAction(
	CategoryActionTypes.CATEGORY_UPDATE_FAILED,
	props<Payload<Exception>>()
);
