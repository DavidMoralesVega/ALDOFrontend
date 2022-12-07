import { Action, createReducer, on } from '@ngrx/store';
import * as zActions from './recognition.action';
import { recognitionInitialState, RecognitionState } from './recognition.state';

const _recognitionReducer = createReducer(
	recognitionInitialState,

	// create
	on(zActions.RECOGNITION_CREATE_REQUESTED, (state, { payload }) => ({
		...state,
		create: {
			createRecognitionDto: payload,
			exception: null,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.RECOGNITION_CREATE_LOADED, (state, { payload }) => ({
		...state,
		create: {
			createRecognitionDto: null,
			exception: null,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.RECOGNITION_CREATE_FAILED, (state, { payload }) => ({
		...state,
		create: {
			createRecognitionDto: null,
			exception: payload,
			isLoading: false,
			response: null
		}
	})),

	// findAll

	on(zActions.RECOGNITION_FIND_ALL_REQUESTED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: null,
			isLoading: true,
			pagination: payload
		}
	})),

	on(zActions.RECOGNITION_FIND_ALL_LOADED, (state, { payload }) => ({
		...state,
		findAll: {
			response: payload,
			exception: null,
			isLoading: false,
			pagination: null
		}
	})),

	on(zActions.RECOGNITION_FIND_ALL_FAILED, (state, { payload }) => ({
		...state,
		findAll: {
			response: null,
			exception: payload,
			isLoading: false,
			pagination: null
		}
	})),

	// findOne
	on(zActions.RECOGNITION_FIND_ONE_REQUESTED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: true,
			response: null,
			id: payload
		}
	})),

	on(zActions.RECOGNITION_FIND_ONE_LOADED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: null,
			isLoading: false,
			response: payload,
			id: null
		}
	})),

	on(zActions.RECOGNITION_FIND_ONE_FAILED, (state, { payload }) => ({
		...state,
		findOne: {
			exception: payload,
			isLoading: false,
			response: null,
			id: null
		}
	})),

	// update
	on(zActions.RECOGNITION_UPDATE_REQUESTED, (state, { payload, id }) => ({
		...state,
		update: {
			updateRecognitionDto: payload,
			exception: null,
			id,
			isLoading: true,
			response: null
		}
	})),

	on(zActions.RECOGNITION_UPDATE_LOADED, (state, { payload }) => ({
		...state,
		update: {
			updateRecognitionDto: null,
			exception: null,
			id: undefined,
			isLoading: false,
			response: payload
		}
	})),

	on(zActions.RECOGNITION_UPDATE_FAILED, (state, { payload }) => ({
		...state,
		update: {
			updateRecognitionDto: null,
			exception: payload,
			id: undefined,
			isLoading: false,
			response: null
		}
	}))
);

export function RecognitionReducer(state: RecognitionState, action: Action) {
	return _recognitionReducer(state, action);
}
