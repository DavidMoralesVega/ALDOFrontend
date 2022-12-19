import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './legislature.action';
import { LegislatureState, legislatureInitialState } from './legislature.state';

const _legislatureReducer = createReducer(
	legislatureInitialState,

	// create
	on(zActions.LEGISLATURE_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createLegislatureDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.LEGISLATURE_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createLegislatureDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.LEGISLATURE_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createLegislatureDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.LEGISLATURE_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.LEGISLATURE_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.LEGISLATURE_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.LEGISLATURE_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.LEGISLATURE_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.LEGISLATURE_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.LEGISLATURE_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateLegislatureDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.LEGISLATURE_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateLegislatureDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.LEGISLATURE_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateLegislatureDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function LegislatureReducer(state: LegislatureState, action: Action) {
	return _legislatureReducer(state, action);
}
