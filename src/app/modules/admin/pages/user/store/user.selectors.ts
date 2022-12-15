import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';

import { UserState } from './user.state';

export const getUserState = createFeatureSelector<UserState>(ZEffects.user);
const zS = getUserState;
// create
export const getUserCreateDto = createSelector(zS, (z) => z.create.createUserDto);
export const getUserCreateException = createSelector(zS, (z) => z.create.exception);
export const getUserCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getUserCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getUserFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getUserFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getUserFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getUserFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// update
export const getUserUpdateDto = createSelector(zS, (z) => z.update.updateUserDto);
export const getUserUpdateId = createSelector(zS, (z) => z.update.id);
export const getUserUpdateException = createSelector(zS, (z) => z.update.exception);
export const getUserUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getUserUpdateResponse = createSelector(zS, (z) => z.update.response);
