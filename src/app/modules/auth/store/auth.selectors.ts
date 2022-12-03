import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { AuthState } from './auth.state';

export const getAuthState = createFeatureSelector<AuthState>(ZEffects.z_auth);
const zS = getAuthState;

// login

export const getAuthLoginDto = createSelector(zS, (z) => z.login.loginDto);
export const getAuthLoginException = createSelector(zS, (z) => z.login.exception);
export const getAuthLoginIsLoading = createSelector(zS, (z) => z.login.isLoading);
export const getAuthLoginIsLoggedIn = createSelector(zS, (z) => z.login.isLoggedIn);
export const getAuthLoginResponse = createSelector(zS, (z) => z.login.response);
