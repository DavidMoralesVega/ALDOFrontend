import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './user.action';
import { userInitialState, UserState } from './user.state';

const _userReducer = createReducer(
	userInitialState,

	// create
	on(zActions.USER_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createUserDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.USER_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createUserDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.USER_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createUserDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.USER_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.USER_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.USER_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// update
	on(zActions.USER_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateUserDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.USER_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateUserDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.USER_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateUserDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function UserReducer(state: UserState, action: Action) {
	return _userReducer(state, action);
}
