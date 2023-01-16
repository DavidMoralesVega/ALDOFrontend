import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { RequestWritten, UpdateRequestWrittenDto } from '../entities';
import { RequestWrittenState } from '../store/request-written.state';
import * as zSelector from '../store/request-written.selectors';
import {
	REQUESTWRITTEN_CREATE_REQUESTED,
	REQUESTWRITTEN_FIND_ALL_REQUESTED,
	REQUESTWRITTEN_FIND_ONE_REQUESTED,
	REQUESTWRITTEN_UPDATE_REQUESTED
} from '../store/request-written.action';

@Injectable()
export class RequestWrittenFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<RequestWritten> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<RequestWritten[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<RequestWritten> | null>;

	// update
	public updateDto$: Observable<UpdateRequestWrittenDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<RequestWritten> | null>;

	constructor(private readonly store: Store<RequestWrittenState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getRequestWrittenCreateDto);
		this.createException$ = this.store.select(zSelector.getRequestWrittenCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getRequestWrittenCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getRequestWrittenCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getRequestWrittenFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getRequestWrittenFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getRequestWrittenFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getRequestWrittenFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getRequestWrittenFindOneId);
		this.findOneException$ = this.store.select(zSelector.getRequestWrittenFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getRequestWrittenFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getRequestWrittenFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getRequestWrittenUpdateDto);
		this.updateId$ = this.store.select(zSelector.getRequestWrittenUpdateId);
		this.updateException$ = this.store.select(zSelector.getRequestWrittenUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getRequestWrittenUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getRequestWrittenUpdateResponse);
	}

	create(createRequestWrittenDto: FormData) {
		this.store.dispatch(REQUESTWRITTEN_CREATE_REQUESTED({ payload: createRequestWrittenDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(REQUESTWRITTEN_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(REQUESTWRITTEN_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateRequestWrittenDto: UpdateRequestWrittenDto | FormData) {
		this.store.dispatch(
			REQUESTWRITTEN_UPDATE_REQUESTED({
				id,
				payload: updateRequestWrittenDto
			})
		);
	}
}
