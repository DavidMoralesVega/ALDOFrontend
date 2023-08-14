import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZUploadState } from './file-upload.state';

export const getZUploadState = createFeatureSelector<ZUploadState>('zephyrus-file-upload');
const zS = getZUploadState;

// create
export const createZUpload = createSelector(zS, (z) => ({
	exception: z.create.exception,
	isLoading: z.create.isLoading,
	response: z.create.response,
	createFileUploadDto: z.create.createFileUploadDto
}));

// findAll
export const removeZUpload = createSelector(zS, (z) => ({
	paths: z.remove.paths,
	exception: z.remove.exception,
	isLoading: z.remove.isLoading,
	response: z.remove.response
}));
