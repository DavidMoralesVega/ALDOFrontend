import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './post.action';
import { postInitialState, PostState } from './post.state';

const _postReducer = createReducer(
	postInitialState,

	// create
	on(zActions.POST_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createPostDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.POST_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createPostDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.POST_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createPostDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.POST_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.POST_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.POST_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.POST_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.POST_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.POST_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.POST_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updatePostDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.POST_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updatePostDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.POST_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updatePostDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function PostReducer(state: PostState, action: Action) {
	return _postReducer(state, action);
}
