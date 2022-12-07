import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './call.action';
import { callInitialState, CallState } from './call.state';

const _callReducer = createReducer(
	callInitialState,

	// create
	on(zActions.CALL_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createCallDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CALL_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createCallDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CALL_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createCallDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.CALL_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.CALL_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.CALL_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.CALL_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.CALL_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.CALL_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.CALL_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateCallDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CALL_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateCallDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CALL_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateCallDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function CallReducer(state: CallState, action: Action) {
	return _callReducer(state, action);
}
