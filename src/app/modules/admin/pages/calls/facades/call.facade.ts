import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Call, CreateCallDto, UpdateCallDto } from '../entities';
import * as zSelector from '../store/call.selectors';
import { CallState } from '../store/call.state';
import {
	CALL_CREATE_REQUESTED,
	CALL_FIND_ALL_REQUESTED,
	CALL_FIND_ONE_REQUESTED,
	CALL_UPDATE_REQUESTED
} from '../store/call.action';

@Injectable()
export class CallFacade {
	// create
	public createDto$: Observable<CreateCallDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Call> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Call[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Call> | null>;

	// update
	public updateDto$: Observable<UpdateCallDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Call> | null>;

	constructor(private readonly store: Store<CallState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getCallCreateDto);
		this.createException$ = this.store.select(zSelector.getCallCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getCallCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getCallCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getCallFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getCallFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getCallFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getCallFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getCallFindOneId);
		this.findOneException$ = this.store.select(zSelector.getCallFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getCallFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getCallFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getCallUpdateDto);
		this.updateId$ = this.store.select(zSelector.getCallUpdateId);
		this.updateException$ = this.store.select(zSelector.getCallUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getCallUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getCallUpdateResponse);
	}

	create(createCallDto: CreateCallDto) {
		this.store.dispatch(CALL_CREATE_REQUESTED({ payload: createCallDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(CALL_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(CALL_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateCallDto: UpdateCallDto | CreateCallDto) {
		this.store.dispatch(
			CALL_UPDATE_REQUESTED({
				id,
				payload: updateCallDto
			})
		);
	}
}
