import { createAction, props } from '@ngrx/store';
import { ZUpload } from '../models/file-upload.model';
import { Payload, ZI_Response } from 'src/app/core/entities';

export enum ZUploadActionTypes {
	ZUPLOAD_CREATE_REQUESTED = '[Zupload] CREATE Requested',
	ZUPLOAD_CREATE_LOADED = '[Zupload] CREATE Loaded',
	ZUPLOAD_CREATE_FAILED = '[Zupload] CREATE Failed',

	ZUPLOAD_REMOVE_REQUESTED = '[Zupload] REMOVE Requested',
	ZUPLOAD_REMOVE_LOADED = '[Zupload] REMOVE Loaded',
	ZUPLOAD_REMOVE_FAILED = '[Zupload] REMOVE Failed'
}

// CREATE
export const ZUPLOAD_CREATE_REQUESTED = createAction(
	ZUploadActionTypes.ZUPLOAD_CREATE_REQUESTED,
	props<Payload<FormData>>()
);

export const ZUPLOAD_CREATE_LOADED = createAction(
	ZUploadActionTypes.ZUPLOAD_CREATE_LOADED,
	props<Payload<ZI_Response<ZUpload>>>()
);

export const ZUPLOAD_CREATE_FAILED = createAction(
	ZUploadActionTypes.ZUPLOAD_CREATE_FAILED,
	props<Payload<undefined>>()
);

export const ZUPLOAD_REMOVE_REQUESTED = createAction(
	ZUploadActionTypes.ZUPLOAD_REMOVE_REQUESTED,
	props<Payload<string[]>>()
);

export const ZUPLOAD_REMOVE_LOADED = createAction(
	ZUploadActionTypes.ZUPLOAD_REMOVE_LOADED,
	props<Payload<ZI_Response<ZUpload>>>()
);

export const ZUPLOAD_REMOVE_FAILED = createAction(
	ZUploadActionTypes.ZUPLOAD_REMOVE_FAILED,
	props<Payload<undefined>>()
);
