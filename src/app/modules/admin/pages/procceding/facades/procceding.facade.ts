import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/procceding.selectors';
import { ProccedingState } from '../store/procceding.state';
import {
	PROCCEDING_CREATE_REQUESTED,
	PROCCEDING_FIND_ALL_REQUESTED,
	PROCCEDING_FIND_ONE_REQUESTED,
	PROCCEDING_UPDATE_REQUESTED
} from '../store/procceding.action';
import { CreateProccedingDto, Procceding, UpdateProccedingDto } from '../entities';

@Injectable()
export class ProccedingFacade {
	// create
	public createDto$: Observable<CreateProccedingDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Procceding> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Procceding[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Procceding> | null>;

	// update
	public updateDto$: Observable<UpdateProccedingDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Procceding> | null>;

	constructor(private readonly store: Store<ProccedingState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getProccedingCreateDto);
		this.createException$ = this.store.select(zSelector.getProccedingCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getProccedingCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getProccedingCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getProccedingFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getProccedingFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getProccedingFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getProccedingFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getProccedingFindOneId);
		this.findOneException$ = this.store.select(zSelector.getProccedingFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getProccedingFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getProccedingFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getProccedingUpdateDto);
		this.updateId$ = this.store.select(zSelector.getProccedingUpdateId);
		this.updateException$ = this.store.select(zSelector.getProccedingUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getProccedingUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getProccedingUpdateResponse);
	}

	create(createCategoryDto: CreateProccedingDto) {
		this.store.dispatch(PROCCEDING_CREATE_REQUESTED({ payload: createCategoryDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(PROCCEDING_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(PROCCEDING_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateProccedingDto: CreateProccedingDto | UpdateProccedingDto) {
		this.store.dispatch(
			PROCCEDING_UPDATE_REQUESTED({
				id,
				payload: updateProccedingDto
			})
		);
	}
}
