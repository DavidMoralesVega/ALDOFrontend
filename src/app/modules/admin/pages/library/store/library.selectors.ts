import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { LibraryState } from './library.state';

export const getLibraryState = createFeatureSelector<LibraryState>(ZEffects.library);
const zS = getLibraryState;
// create
export const getLibraryCreateDto = createSelector(zS, (z) => z.create.createLibraryDto);
export const getLibraryCreateException = createSelector(zS, (z) => z.create.exception);
export const getLibraryCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getLibraryCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getLibraryFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getLibraryFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getLibraryFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getLibraryFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getLibraryFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getLibraryFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getLibraryFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getLibraryFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getLibraryUpdateDto = createSelector(zS, (z) => z.update.updateLibraryDto);
export const getLibraryUpdateId = createSelector(zS, (z) => z.update.id);
export const getLibraryUpdateException = createSelector(zS, (z) => z.update.exception);
export const getLibraryUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getLibraryUpdateResponse = createSelector(zS, (z) => z.update.response);

// SERACH
export const getLibrarySearchPagination = createSelector(zS, (z) => z.search.search);
export const getLibrarySearchException = createSelector(zS, (z) => z.search.exception);
export const getLibrarySearchIsLoading = createSelector(zS, (z) => z.search.isLoading);
export const getLibrarySearchResponse = createSelector(zS, (z) => z.search.response);
