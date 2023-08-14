import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './file-upload.action';
import { ZUploadInitialState, ZUploadState } from './file-upload.state';
import { ZUpload } from '../models/file-upload.model';
import { getResponseIS } from 'src/app/core/ngrx/initial.state';

const _zUploadReducer = createReducer(
	ZUploadInitialState,

	on(zActions.ZUPLOAD_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createFileUploadDto: payload,
			exception: undefined,
			isLoading: true,
			response: getResponseIS<ZUpload>(new ZUpload())
		}
	})),

	on(zActions.ZUPLOAD_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createFileUploadDto: new FormData(),
			exception: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.ZUPLOAD_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createFileUploadDto: new FormData(),
			exception: payload,
			isLoading: false,
			response: getResponseIS<ZUpload>(new ZUpload())
		}
	})),

	// remove

	on(zActions.ZUPLOAD_REMOVE_REQUESTED, (state, { payload }) => ({
		...state,
		remove: {
			paths: payload,
			exception: undefined,
			isLoading: true,
			response: getResponseIS<ZUpload>(new ZUpload())
		}
	})),

	on(zActions.ZUPLOAD_REMOVE_LOADED, (state, { payload }) => ({
		...state,
		remove: {
			paths: [],
			exception: undefined,
			isLoading: true,
			response: payload
		}
	})),

	on(zActions.ZUPLOAD_REMOVE_FAILED, (state, { payload }) => ({
		...state,
		remove: {
			paths: [],
			exception: payload,
			isLoading: true,
			response: getResponseIS<ZUpload>(new ZUpload())
		}
	}))
);

export function ZUploadReducer(state: ZUploadState, action: Action) {
	return _zUploadReducer(state, action);
}
