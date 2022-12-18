import { createAction, props } from '@ngrx/store';
import { Exception, Payload, PayloadUpdate, Response } from 'src/app/core/entities';
import { CreatePostDto, UpdatePostDto, Post } from '../entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';

export enum PostActionTypes {
	// create
	POST_CREATE_REQUESTED = '[Post] CREATE Requested',
	POST_CREATE_LOADED = '[Post] CREATE Loaded',
	POST_CREATE_FAILED = '[Post] CREATE Failed',

	// findAll
	POST_FIND_ALL_REQUESTED = '[Post] FIND ALL Requested',
	POST_FIND_ALL_LOADED = '[Post] FIND ALL Loaded',
	POST_FIND_ALL_FAILED = '[Post] FIND ALL Failed',

	// findOne
	POST_FIND_ONE_REQUESTED = '[Post] FIND ONE Requested',
	POST_FIND_ONE_LOADED = '[Post] FIND ONE Loaded',
	POST_FIND_ONE_FAILED = '[Post] FIND ONE Failed',

	// update
	POST_UPDATE_REQUESTED = '[Post] UPDATE Requested',
	POST_UPDATE_LOADED = '[Post] UPDATE Loaded',
	POST_UPDATE_FAILED = '[Post] UPDATE Failed'
}

// create
export const POST_CREATE_REQUESTED = createAction(
	PostActionTypes.POST_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const POST_CREATE_LOADED = createAction(
	PostActionTypes.POST_CREATE_LOADED,
	props<Payload<Response<Post>>>()
);

export const POST_CREATE_FAILED = createAction(
	PostActionTypes.POST_CREATE_FAILED,
	props<Payload<Exception>>()
);

// findAll
export const POST_FIND_ALL_REQUESTED = createAction(
	PostActionTypes.POST_FIND_ALL_REQUESTED,
	props<Payload<Pagination>>()
);

export const POST_FIND_ALL_LOADED = createAction(
	PostActionTypes.POST_FIND_ALL_LOADED,
	props<Payload<Response<Post[]>>>()
);

export const POST_FIND_ALL_FAILED = createAction(
	PostActionTypes.POST_FIND_ALL_FAILED,
	props<Payload<Exception>>()
);

// findOne
export const POST_FIND_ONE_REQUESTED = createAction(
	PostActionTypes.POST_FIND_ONE_REQUESTED,
	props<Payload<string>>()
);

export const POST_FIND_ONE_LOADED = createAction(
	PostActionTypes.POST_FIND_ONE_LOADED,
	props<Payload<Response<Post>>>()
);

export const POST_FIND_ONE_FAILED = createAction(
	PostActionTypes.POST_FIND_ONE_FAILED,
	props<Payload<Exception>>()
);

// update
export const POST_UPDATE_REQUESTED = createAction(
	PostActionTypes.POST_UPDATE_REQUESTED,
	props<PayloadUpdate<UpdatePostDto, string>>()
);

export const POST_UPDATE_LOADED = createAction(
	PostActionTypes.POST_UPDATE_LOADED,
	props<Payload<Response<Post>>>()
);

export const POST_UPDATE_FAILED = createAction(
	PostActionTypes.POST_UPDATE_FAILED,
	props<Payload<Exception>>()
);
