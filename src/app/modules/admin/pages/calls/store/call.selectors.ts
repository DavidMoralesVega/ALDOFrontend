import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { CallState } from './call.state';

export const getCallState = createFeatureSelector<CallState>(ZEffects.call);
const zS = getCallState;
// create
export const getCallCreateDto = createSelector(zS, (z) => z.create.createCallDto);
export const getCallCreateException = createSelector(zS, (z) => z.create.exception);
export const getCallCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getCallCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getCallFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getCallFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getCallFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getCallFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getCallFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getCallFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getCallFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getCallFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getCallUpdateDto = createSelector(zS, (z) => z.update.updateCallDto);
export const getCallUpdateId = createSelector(zS, (z) => z.update.id);
export const getCallUpdateException = createSelector(zS, (z) => z.update.exception);
export const getCallUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getCallUpdateResponse = createSelector(zS, (z) => z.update.response);
