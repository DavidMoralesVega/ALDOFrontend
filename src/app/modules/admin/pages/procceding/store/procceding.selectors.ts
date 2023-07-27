import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { ProccedingState } from './procceding.state';

export const getProccedingState = createFeatureSelector<ProccedingState>(ZEffects.proceeding);
const zS = getProccedingState;
// create
export const getProccedingCreateDto = createSelector(zS, (z) => z.create.createProccedingDto);
export const getProccedingCreateException = createSelector(zS, (z) => z.create.exception);
export const getProccedingCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getProccedingCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getProccedingFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getProccedingFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getProccedingFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getProccedingFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getProccedingFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getProccedingFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getProccedingFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getProccedingFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getProccedingUpdateDto = createSelector(zS, (z) => z.update.updateProccedingDto);
export const getProccedingUpdateId = createSelector(zS, (z) => z.update.id);
export const getProccedingUpdateException = createSelector(zS, (z) => z.update.exception);
export const getProccedingUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getProccedingUpdateResponse = createSelector(zS, (z) => z.update.response);
