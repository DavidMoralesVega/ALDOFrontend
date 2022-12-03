import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './auth.action';
import { authInitialState, AuthState } from './auth.state';

const _authReducer = createReducer(
	authInitialState,

	// login
	on(zActions.LOGIN_REQUESTED, (state, { payload, t }) => ({
		...state,
		login: {
			exception: null,
			isLoading: true,
			isLoggedIn: false,
			loginDto: payload,
			type: t,
			response: null
		}
	})),

	on(zActions.LOGIN_SUCCESS, (state, { payload }) => ({
		...state,
		login: {
			exception: null,
			isLoading: false,
			isLoggedIn: true,
			loginDto: null,
			type: null,
			response: payload
		}
	})),

	on(zActions.LOGIN_FAILED, (state, { payload }) => ({
		...state,
		login: {
			exception: payload,
			isLoading: false,
			isLoggedIn: false,
			loginDto: null,
			type: null,
			response: null
		}
	})),

	// logout

	on(zActions.LOGOUT_COMPLETED, (state) => ({
		...state,
		login: {
			exception: null,
			isLoading: false,
			isLoggedIn: false,
			loginDto: null,
			type: null,
			response: null
		}
	}))
);

export function AuthReducer(state: AuthState, action: Action) {
	return _authReducer(state, action);
}
