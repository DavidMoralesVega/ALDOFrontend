import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { AdmPaisState } from './adm-pais.state';

export const getAdmPaisState = createFeatureSelector<AdmPaisState>(ZEffects.adsi_adm_pais);
const zS = getAdmPaisState;
// create
export const getAdmPaisCreateDto = createSelector(zS, (z) => z.create.createAdmPaisDto);
export const getAdmPaisCreateException = createSelector(zS, (z) => z.create.exception);
export const getAdmPaisCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getAdmPaisCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getAdmPaisFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getAdmPaisFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getAdmPaisFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getAdmPaisFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getAdmPaisFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getAdmPaisFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getAdmPaisFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getAdmPaisFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getAdmPaisUpdateDto = createSelector(zS, (z) => z.update.updateAdmPaisDto);
export const getAdmPaisUpdateId = createSelector(zS, (z) => z.update.id);
export const getAdmPaisUpdateException = createSelector(zS, (z) => z.update.exception);
export const getAdmPaisUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getAdmPaisUpdateResponse = createSelector(zS, (z) => z.update.response);
