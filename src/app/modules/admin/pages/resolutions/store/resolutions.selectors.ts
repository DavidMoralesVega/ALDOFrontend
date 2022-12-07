import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';

import { ResolutionState } from './resolutions.state';

export const getResolutionState = createFeatureSelector<ResolutionState>(ZEffects.resolutions);
const zS = getResolutionState;
// create
export const getResolutionCreateDto = createSelector(zS, (z) => z.create.createResolutionDto);
export const getResolutionCreateException = createSelector(zS, (z) => z.create.exception);
export const getResolutionCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getResolutionCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getResolutionFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getResolutionFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getResolutionFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getResolutionFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getResolutionFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getResolutionFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getResolutionFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getResolutionFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getResolutionUpdateDto = createSelector(zS, (z) => z.update.updateResolutionDto);
export const getResolutionUpdateId = createSelector(zS, (z) => z.update.id);
export const getResolutionUpdateException = createSelector(zS, (z) => z.update.exception);
export const getResolutionUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getResolutionUpdateResponse = createSelector(zS, (z) => z.update.response);
