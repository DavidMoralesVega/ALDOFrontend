import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './request-reports.action';
import { requestReportsInitialState, RequestReportsState } from './request-reports.state';

const _requestReportsReducer = createReducer(
	requestReportsInitialState,

	// create
	on(zActions.REQUESTREPORTS_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createRequestReportsDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.REQUESTREPORTS_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createRequestReportsDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.REQUESTREPORTS_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createRequestReportsDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.REQUESTREPORTS_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.REQUESTREPORTS_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.REQUESTREPORTS_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.REQUESTREPORTS_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.REQUESTREPORTS_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.REQUESTREPORTS_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.REQUESTREPORTS_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateRequestReportsDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.REQUESTREPORTS_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateRequestReportsDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.REQUESTREPORTS_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateRequestReportsDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function RequestReportsReducer(state: RequestReportsState, action: Action) {
	return _requestReportsReducer(state, action);
}
