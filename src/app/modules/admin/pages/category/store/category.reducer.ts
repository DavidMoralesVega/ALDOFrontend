import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './category.action';
import { categoryInitialState, CategoryState } from './category.state';

const _categoryReducer = createReducer(
	categoryInitialState,

	// create
	on(zActions.CATEGORY_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createCategoryDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CATEGORY_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createCategoryDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CATEGORY_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createCategoryDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.CATEGORY_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.CATEGORY_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.CATEGORY_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.CATEGORY_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.CATEGORY_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.CATEGORY_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.CATEGORY_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateCategoryDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.CATEGORY_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateCategoryDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.CATEGORY_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateCategoryDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function CategoryReducer(state: CategoryState, action: Action) {
	return _categoryReducer(state, action);
}
