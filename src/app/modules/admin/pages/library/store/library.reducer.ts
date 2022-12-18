import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './library.action';
import { libraryInitialState, LibraryState } from './library.state';

const _libraryReducer = createReducer(
	libraryInitialState,

	// create
	on(zActions.LIBRARY_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createLibraryDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.LIBRARY_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createLibraryDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.LIBRARY_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createLibraryDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.LIBRARY_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.LIBRARY_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.LIBRARY_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.LIBRARY_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.LIBRARY_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.LIBRARY_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.LIBRARY_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateLibraryDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.LIBRARY_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateLibraryDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.LIBRARY_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateLibraryDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	})),
	// SEARCH

	on(zActions.LIBRARY_SEARCH_REQUESTED, (state, { payload }) => ({
		...state,
		search: {
			response: null,
			exception: null,
			isLoading: true,
			search: payload
		}
	})),

	on(zActions.LIBRARY_SEARCH_LOADED, (state, { payload }) => ({
		...state,
		search: {
			response: payload,
			exception: null,
			isLoading: false,
			search: null
		}
	})),

	on(zActions.LIBRARY_SEARCH_FAILED, (state, { payload }) => ({
		...state,
		search: {
			response: null,
			exception: payload,
			isLoading: false,
			search: null
		}
	}))
);

export function LibraryReducer(state: LibraryState, action: Action) {
	return _libraryReducer(state, action);
}
