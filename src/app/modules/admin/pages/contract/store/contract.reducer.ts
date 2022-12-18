import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './contract.action';
import { contractInitialState, ContractState } from './contract.state';

const _contractReducer = createReducer(
	contractInitialState,

	// create
	on(zActions.CONTRACT_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createContractDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CONTRACT_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createContractDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CONTRACT_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createContractDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.CONTRACT_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.CONTRACT_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.CONTRACT_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.CONTRACT_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.CONTRACT_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.CONTRACT_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.CONTRACT_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateContractDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CONTRACT_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateContractDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CONTRACT_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateContractDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function ContractReducer(state: ContractState, action: Action) {
	return _contractReducer(state, action);
}
