import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { DepartamentLawState } from './departament-law.state';

export const getDepartamentLawState = createFeatureSelector<DepartamentLawState>(
	ZEffects.departament_law
);
const zS = getDepartamentLawState;
// create
export const getDepartamentLawCreateDto = createSelector(
	zS,
	(z) => z.create.createDepartamentLawDto
);
export const getDepartamentLawCreateException = createSelector(zS, (z) => z.create.exception);
export const getDepartamentLawCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getDepartamentLawCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getDepartamentLawFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getDepartamentLawFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getDepartamentLawFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getDepartamentLawFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getDepartamentLawFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getDepartamentLawFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getDepartamentLawFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getDepartamentLawFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getDepartamentLawUpdateDto = createSelector(
	zS,
	(z) => z.update.updateDepartamentLawDto
);
export const getDepartamentLawUpdateId = createSelector(zS, (z) => z.update.id);
export const getDepartamentLawUpdateException = createSelector(zS, (z) => z.update.exception);
export const getDepartamentLawUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getDepartamentLawUpdateResponse = createSelector(zS, (z) => z.update.response);
