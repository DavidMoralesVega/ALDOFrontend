import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './departament-law.action';
import { departamentLawInitialState, DepartamentLawState } from './departament-law.state';

const _departamentLawReducer = createReducer(
	departamentLawInitialState,

	// create
	on(zActions.DEPARTAMENTLAW_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createDepartamentLawDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.DEPARTAMENTLAW_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createDepartamentLawDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.DEPARTAMENTLAW_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createDepartamentLawDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.DEPARTAMENTLAW_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.DEPARTAMENTLAW_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.DEPARTAMENTLAW_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.DEPARTAMENTLAW_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.DEPARTAMENTLAW_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.DEPARTAMENTLAW_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.DEPARTAMENTLAW_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateDepartamentLawDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.DEPARTAMENTLAW_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateDepartamentLawDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.DEPARTAMENTLAW_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateDepartamentLawDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function DepartamentLawReducer(state: DepartamentLawState, action: Action) {
	return _departamentLawReducer(state, action);
}
