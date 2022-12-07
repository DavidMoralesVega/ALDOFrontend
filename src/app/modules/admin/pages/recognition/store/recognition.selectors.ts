import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { RecognitionState } from './recognition.state';

export const getRecognitionState = createFeatureSelector<RecognitionState>(ZEffects.recognition);
const zS = getRecognitionState;
// create
export const getRecognitionCreateDto = createSelector(zS, (z) => z.create.createRecognitionDto);
export const getRecognitionCreateException = createSelector(zS, (z) => z.create.exception);
export const getRecognitionCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getRecognitionCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getRecognitionFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getRecognitionFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getRecognitionFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getRecognitionFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getRecognitionFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getRecognitionFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getRecognitionFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getRecognitionFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getRecognitionUpdateDto = createSelector(zS, (z) => z.update.updateRecognitionDto);
export const getRecognitionUpdateId = createSelector(zS, (z) => z.update.id);
export const getRecognitionUpdateException = createSelector(zS, (z) => z.update.exception);
export const getRecognitionUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getRecognitionUpdateResponse = createSelector(zS, (z) => z.update.response);
