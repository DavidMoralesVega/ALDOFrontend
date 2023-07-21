import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './file-archive.action';
import { filesArchiveInitialState, FilesArchiveState } from './file-archive.state';

const _filesArchiveReducer = createReducer(
	filesArchiveInitialState,

	// create
	on(zActions.FILESARCHIVE_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createFilesArchiveDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.FILESARCHIVE_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createFilesArchiveDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.FILESARCHIVE_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createFilesArchiveDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.FILESARCHIVE_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.FILESARCHIVE_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.FILESARCHIVE_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.FILESARCHIVE_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.FILESARCHIVE_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.FILESARCHIVE_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.FILESARCHIVE_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateFilesArchiveDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.FILESARCHIVE_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateFilesArchiveDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.FILESARCHIVE_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateFilesArchiveDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function FilesArchiveReducer(state: FilesArchiveState, action: Action) {
	return _filesArchiveReducer(state, action);
}
