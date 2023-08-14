import { createAction, props } from '@ngrx/store';
import { Exception, Payload, Response } from 'src/app/core/entities';
import { LoginUserDto, UserTokenDto, User } from '../pages/auth-user/entities/models/user.model';
import { UserERPTokenDto, UserERP } from '../pages/auth-erp/entities/models/user-erp.model';
import { PayloadLogin } from '../../../core/entities/adapters/object.adapter';
import { ETypeUser } from '../entities/enums/type-user';

export enum AuthActionTypes {
	// login
	LOGIN_REQUESTED = '[Auth] LOGIN Requested',
	LOGIN_SUCCESS = '[Auth] LOGIN Success',
	LOGIN_FAILED = '[Auth] LOGIN Failed',

	// logout
	LOGOUT_REQUESTED = '[Auth] LOGOUT Requested',
	LOGOUT_COMPLETED = '[Auth] LOGOUT Completed',

	// get user erp
	GET_AUTH = '[Auth] GET Auth',
	AUTH_ERROR = '[Auth] Error'
}

// login
export const LOGIN_REQUESTED = createAction(
	AuthActionTypes.LOGIN_REQUESTED,
	props<PayloadLogin<LoginUserDto, ETypeUser>>()
);

export const LOGIN_SUCCESS = createAction(
	AuthActionTypes.LOGIN_SUCCESS,
	props<Payload<Response<UserTokenDto>>>()
);

export const LOGIN_FAILED = createAction(AuthActionTypes.LOGIN_FAILED, props<Payload<Exception>>());

// logout
export const LOGOUT_REQUESTED = createAction(AuthActionTypes.LOGOUT_REQUESTED);

export const LOGOUT_COMPLETED = createAction(AuthActionTypes.LOGOUT_COMPLETED);

// get user auth
export const GET_AUTH = createAction(AuthActionTypes.GET_AUTH, props<Payload<ETypeUser>>());
