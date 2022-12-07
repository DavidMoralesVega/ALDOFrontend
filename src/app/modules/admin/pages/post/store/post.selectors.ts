import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities/enums/effects.enum';
import { PostState } from './post.state';

export const getPostState = createFeatureSelector<PostState>(ZEffects.post);
const zS = getPostState;
// create
export const getPostCreateDto = createSelector(zS, (z) => z.create.createPostDto);
export const getPostCreateException = createSelector(zS, (z) => z.create.exception);
export const getPostCreateIsLoading = createSelector(zS, (z) => z.create.isLoading);
export const getPostCreateResponse = createSelector(zS, (z) => z.create.response);

// findAll
export const getPostFindAllPagination = createSelector(zS, (z) => z.findAll.pagination);
export const getPostFindAllException = createSelector(zS, (z) => z.findAll.exception);
export const getPostFindAllIsLoading = createSelector(zS, (z) => z.findAll.isLoading);
export const getPostFindAllResponse = createSelector(zS, (z) => z.findAll.response);

// findOne
export const getPostFindOneId = createSelector(zS, (z) => z.findOne.id);
export const getPostFindOneException = createSelector(zS, (z) => z.findOne.exception);
export const getPostFindOneIsLoading = createSelector(zS, (z) => z.findOne.isLoading);
export const getPostFindOneResponse = createSelector(zS, (z) => z.findOne.response);

// update
export const getPostUpdateDto = createSelector(zS, (z) => z.update.updatePostDto);
export const getPostUpdateId = createSelector(zS, (z) => z.update.id);
export const getPostUpdateException = createSelector(zS, (z) => z.update.exception);
export const getPostUpdateIsLoading = createSelector(zS, (z) => z.update.isLoading);
export const getPostUpdateResponse = createSelector(zS, (z) => z.update.response);
