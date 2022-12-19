import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { LegislatureState } from './legislature.state';

export const getLegislatureState = createFeatureSelector<LegislatureState>(ZEffects.legislature);
const zS = getLegislatureState;
// create
export const getLegislatureCreateDto = createSelector(zS, (z) => z.create.createLegislatureDto);
export const getLegislatureCreateException = createSelector(zS, (z) => z.create.exception);
export const getLegislatureCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getLegislatureCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getLegislatureFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getLegislatureFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getLegislatureFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getLegislatureFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getLegislatureFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getLegislatureFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getLegislatureFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getLegislatureFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getLegislatureUpdateDto = createSelector(zS, (z) => z.update.updateLegislatureDto);
export const getLegislatureUpdateId = createSelector(zS, (z) => z.update.id);
export const getLegislatureUpdateException = createSelector(zS, (z) => z.update.exception);
export const getLegislatureUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getLegislatureUpdateResponse = createSelector(zS, (z) => z.update.response);
