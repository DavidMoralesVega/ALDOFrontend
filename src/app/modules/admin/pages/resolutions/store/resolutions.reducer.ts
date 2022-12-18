import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './resolutions.action';
import { resolutionInitialState, ResolutionState } from './resolutions.state';

const _resolutionReducer = createReducer(
	resolutionInitialState,

	// create
	on(zActions.RESOLUTION_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createResolutionDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.RESOLUTION_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createResolutionDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.RESOLUTION_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createResolutionDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.RESOLUTION_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.RESOLUTION_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.RESOLUTION_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.RESOLUTION_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.RESOLUTION_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.RESOLUTION_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.RESOLUTION_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateResolutionDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.RESOLUTION_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateResolutionDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.RESOLUTION_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateResolutionDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function ResolutionReducer(state: ResolutionState, action: Action) {
	return _resolutionReducer(state, action);
}
