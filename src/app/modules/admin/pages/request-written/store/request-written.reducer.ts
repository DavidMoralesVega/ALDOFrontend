import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './request-written.action';
import { requestWrittenInitialState, RequestWrittenState } from './request-written.state';

const _requestWrittenReducer = createReducer(
	requestWrittenInitialState,

	// create
	on(zActions.REQUESTWRITTEN_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createRequestWrittenDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.REQUESTWRITTEN_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createRequestWrittenDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.REQUESTWRITTEN_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createRequestWrittenDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.REQUESTWRITTEN_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.REQUESTWRITTEN_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.REQUESTWRITTEN_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.REQUESTWRITTEN_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.REQUESTWRITTEN_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.REQUESTWRITTEN_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.REQUESTWRITTEN_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateRequestWrittenDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.REQUESTWRITTEN_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateRequestWrittenDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.REQUESTWRITTEN_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateRequestWrittenDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function RequestWrittenReducer(state: RequestWrittenState, action: Action) {
	return _requestWrittenReducer(state, action);
}
