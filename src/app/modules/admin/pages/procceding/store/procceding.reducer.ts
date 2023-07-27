import { Action, createReducer, on } from '@ngrx/store';
import { ProccedingState, proccedingInitialState } from './procceding.state';
import * as zActions from './procceding.action';

const _proceedingReducer = createReducer(
	proccedingInitialState,

	// create
	on(zActions.PROCCEDING_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createProccedingDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.PROCCEDING_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createProccedingDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.PROCCEDING_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createProccedingDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.PROCCEDING_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.PROCCEDING_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.PROCCEDING_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.PROCCEDING_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.PROCCEDING_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.PROCCEDING_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.PROCCEDING_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateProccedingDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.PROCCEDING_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateProccedingDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.PROCCEDING_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateProccedingDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function ProccedingReducer(state: ProccedingState, action: Action) {
	return _proceedingReducer(state, action);
}
