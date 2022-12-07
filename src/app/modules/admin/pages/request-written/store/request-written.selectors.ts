import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { RequestWrittenState } from './request-written.state';

export const getRequestWrittenState = createFeatureSelector<RequestWrittenState>(
	ZEffects.request_written
);
const zS = getRequestWrittenState;
// create
export const getRequestWrittenCreateDto = createSelector(
	zS,
	(z) => z.create.createRequestWrittenDto
);
export const getRequestWrittenCreateException = createSelector(zS, (z) => z.create.exception);
export const getRequestWrittenCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getRequestWrittenCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getRequestWrittenFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getRequestWrittenFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getRequestWrittenFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getRequestWrittenFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getRequestWrittenFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getRequestWrittenFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getRequestWrittenFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getRequestWrittenFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getRequestWrittenUpdateDto = createSelector(
	zS,
	(z) => z.update.updateRequestWrittenDto
);
export const getRequestWrittenUpdateId = createSelector(zS, (z) => z.update.id);
export const getRequestWrittenUpdateException = createSelector(zS, (z) => z.update.exception);
export const getRequestWrittenUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getRequestWrittenUpdateResponse = createSelector(zS, (z) => z.update.response);
