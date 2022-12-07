import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { RequestReportsState } from './request-reports.state';

export const getRequestReportsState = createFeatureSelector<RequestReportsState>(
	ZEffects.requestReports
);
const zS = getRequestReportsState;
// create
export const getRequestReportsCreateDto = createSelector(
	zS,
	(z) => z.create.createRequestReportsDto
);
export const getRequestReportsCreateException = createSelector(zS, (z) => z.create.exception);
export const getRequestReportsCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getRequestReportsCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getRequestReportsFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getRequestReportsFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getRequestReportsFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getRequestReportsFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getRequestReportsFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getRequestReportsFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getRequestReportsFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getRequestReportsFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getRequestReportsUpdateDto = createSelector(
	zS,
	(z) => z.update.updateRequestReportsDto
);
export const getRequestReportsUpdateId = createSelector(zS, (z) => z.update.id);
export const getRequestReportsUpdateException = createSelector(zS, (z) => z.update.exception);
export const getRequestReportsUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getRequestReportsUpdateResponse = createSelector(zS, (z) => z.update.response);
