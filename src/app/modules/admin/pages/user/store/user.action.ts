import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';

import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { User, UpdateUserDto, CreateUserDto } from '../entities/models/user.model';

export enum UserActionTypes {
	// create
	USER_CREATE_REQUESTED = '[User] CREATE Requested',
	USER_CREATE_LOADED = '[User] CREATE Loaded',
	USER_CREATE_FAILED = '[User] CREATE Failed',

	// findAll
	USER_FIND_ALL_REQUESTED = '[User] FIND ALL Requested',
	USER_FIND_ALL_LOADED = '[User] FIND ALL Loaded',
	USER_FIND_ALL_FAILED = '[User] FIND ALL Failed',

	// update
	USER_UPDATE_REQUESTED = '[User] UPDATE Requested',
	USER_UPDATE_LOADED = '[User] UPDATE Loaded',
	USER_UPDATE_FAILED = '[User] UPDATE Failed'
}

// create
export const USER_CREATE_REQUESTED = createAction(
	UserActionTypes.USER_CREATE_REQUESTED,
	props<Payload<CreateUserDto>>()
);

export const USER_CREATE_LOADED = createAction(
	UserActionTypes.USER_CREATE_LOADED,
	props<Payload<Response<User>>>()
);

export const USER_CREATE_FAILED = createAction(
	UserActionTypes.USER_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const USER_FIND_ALL_REQUESTED = createAction(
	UserActionTypes.USER_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const USER_FIND_ALL_LOADED = createAction(
	UserActionTypes.USER_FIND_ALL_LOADED,
	props<Payload<Response<User[]>>>()
);

export const USER_FIND_ALL_FAILED = createAction(
	UserActionTypes.USER_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// update
export const USER_UPDATE_REQUESTED = createAction(
	UserActionTypes.USER_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdateUserDto | CreateUserDto, string>>()
);

export const USER_UPDATE_LOADED = createAction(
	UserActionTypes.USER_UPDATE_LOADED,
	props<Payload<Response<User>>>()
);

export const USER_UPDATE_FAILED = createAction(
	UserActionTypes.USER_UPDATE_FAILED,
	props<Payload<Exception>>()
);
