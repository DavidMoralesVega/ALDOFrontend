import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/recognition.selectors';
import { Recognition, UpdateRecognitionDto } from '../entities';
import { RecognitionState } from '../store/recognition.state';
import {
	RECOGNITION_CREATE_REQUESTED,
	RECOGNITION_FIND_ALL_REQUESTED,
	RECOGNITION_FIND_ONE_REQUESTED,
	RECOGNITION_UPDATE_REQUESTED
} from '../store/recognition.action';

@Injectable()
export class RecognitionFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Recognition> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Recognition[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Recognition> | null>;

	// update
	public updateDto$: Observable<UpdateRecognitionDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Recognition> | null>;

	constructor(private readonly store: Store<RecognitionState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getRecognitionCreateDto);
		this.createException$ = this.store.select(zSelector.getRecognitionCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getRecognitionCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getRecognitionCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getRecognitionFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getRecognitionFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getRecognitionFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getRecognitionFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getRecognitionFindOneId);
		this.findOneException$ = this.store.select(zSelector.getRecognitionFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getRecognitionFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getRecognitionFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getRecognitionUpdateDto);
		this.updateId$ = this.store.select(zSelector.getRecognitionUpdateId);
		this.updateException$ = this.store.select(zSelector.getRecognitionUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getRecognitionUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getRecognitionUpdateResponse);
	}

	create(createRecognitionDto: FormData) {
		this.store.dispatch(RECOGNITION_CREATE_REQUESTED({ payload: createRecognitionDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(RECOGNITION_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(RECOGNITION_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateRecognitionDto: UpdateRecognitionDto | FormData) {
		this.store.dispatch(
			RECOGNITION_UPDATE_REQUESTED({
				id,
				payload: updateRecognitionDto
			})
		);
	}
}
