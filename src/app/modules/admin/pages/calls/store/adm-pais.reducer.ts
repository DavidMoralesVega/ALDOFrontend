import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './adm-pais.action';
import { admPaisInitialState, AdmPaisState } from './adm-pais.state';

const _admPaisReducer = createReducer(
	admPaisInitialState,

	// create
	on(zActions.ADMPAIS_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createAdmPaisDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.ADMPAIS_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createAdmPaisDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.ADMPAIS_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createAdmPaisDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.ADMPAIS_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.ADMPAIS_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.ADMPAIS_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.ADMPAIS_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.ADMPAIS_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.ADMPAIS_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.ADMPAIS_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateAdmPaisDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.ADMPAIS_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateAdmPaisDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.ADMPAIS_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateAdmPaisDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function AdmPaisReducer(state: AdmPaisState, action: Action) {
	return _admPaisReducer(state, action);
}
