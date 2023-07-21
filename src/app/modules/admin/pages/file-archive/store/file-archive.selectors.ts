import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { FilesArchiveState } from './file-archive.state';

export const getFilesArchiveState = createFeatureSelector<FilesArchiveState>(ZEffects.fileArchive);
const zS = getFilesArchiveState;
// create
export const getFilesArchiveCreateDto = createSelector(zS, (z) => z.create.createFilesArchiveDto);
export const getFilesArchiveCreateException = createSelector(zS, (z) => z.create.exception);
export const getFilesArchiveCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getFilesArchiveCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getFilesArchiveFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getFilesArchiveFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getFilesArchiveFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getFilesArchiveFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getFilesArchiveFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getFilesArchiveFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getFilesArchiveFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getFilesArchiveFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getFilesArchiveUpdateDto = createSelector(zS, (z) => z.update.updateFilesArchiveDto);
export const getFilesArchiveUpdateId = createSelector(zS, (z) => z.update.id);
export const getFilesArchiveUpdateException = createSelector(zS, (z) => z.update.exception);
export const getFilesArchiveUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getFilesArchiveUpdateResponse = createSelector(zS, (z) => z.update.response);
