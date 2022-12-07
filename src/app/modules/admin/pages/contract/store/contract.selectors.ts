import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';

import { ContractState } from './contract.state';

export const getContractState = createFeatureSelector<ContractState>(ZEffects.contract);
const zS = getContractState;
// create
export const getContractCreateDto = createSelector(zS, (z) => z.create.createContractDto);
export const getContractCreateException = createSelector(zS, (z) => z.create.exception);
export const getContractCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getContractCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getContractFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getContractFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getContractFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getContractFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getContractFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getContractFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getContractFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getContractFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getContractUpdateDto = createSelector(zS, (z) => z.update.updateContractDto);
export const getContractUpdateId = createSelector(zS, (z) => z.update.id);
export const getContractUpdateException = createSelector(zS, (z) => z.update.exception);
export const getContractUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getContractUpdateResponse = createSelector(zS, (z) => z.update.response);
