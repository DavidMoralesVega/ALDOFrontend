import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { CategoryState } from './category.state';

export const getCategoryState = createFeatureSelector<CategoryState>(ZEffects.category);
const zS = getCategoryState;
// create
export const getCategoryCreateDto = createSelector(zS, (z) => z.create.createCategoryDto);
export const getCategoryCreateException = createSelector(zS, (z) => z.create.exception);
export const getCategoryCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getCategoryCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getCategoryFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getCategoryFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getCategoryFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getCategoryFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getCategoryFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getCategoryFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getCategoryFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getCategoryFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getCategoryUpdateDto = createSelector(zS, (z) => z.update.updateCategoryDto);
export const getCategoryUpdateId = createSelector(zS, (z) => z.update.id);
export const getCategoryUpdateException = createSelector(zS, (z) => z.update.exception);
export const getCategoryUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getCategoryUpdateResponse = createSelector(zS, (z) => z.update.response);
