import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/resolutions.selectors';
import { Resolution, UpdateResolutionDto } from '../entities/models/resolutions.model';
import { ResolutionState } from '../store/resolutions.state';
import {
	RESOLUTION_CREATE_REQUESTED,
	RESOLUTION_FIND_ALL_REQUESTED,
	RESOLUTION_FIND_ONE_REQUESTED,
	RESOLUTION_UPDATE_REQUESTED
} from '../store/resolutions.action';

@Injectable()
export class ResolutionFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Resolution> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Resolution[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Resolution> | null>;

	// update
	public updateDto$: Observable<UpdateResolutionDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Resolution> | null>;

	constructor(private readonly store: Store<ResolutionState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getResolutionCreateDto);
		this.createException$ = this.store.select(zSelector.getResolutionCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getResolutionCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getResolutionCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getResolutionFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getResolutionFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getResolutionFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getResolutionFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getResolutionFindOneId);
		this.findOneException$ = this.store.select(zSelector.getResolutionFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getResolutionFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getResolutionFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getResolutionUpdateDto);
		this.updateId$ = this.store.select(zSelector.getResolutionUpdateId);
		this.updateException$ = this.store.select(zSelector.getResolutionUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getResolutionUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getResolutionUpdateResponse);
	}

	create(createResolutionDto: FormData) {
		this.store.dispatch(RESOLUTION_CREATE_REQUESTED({ payload: createResolutionDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(RESOLUTION_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(RESOLUTION_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateResolutionDto: UpdateResolutionDto) {
		this.store.dispatch(
			RESOLUTION_UPDATE_REQUESTED({
				id,
				payload: updateResolutionDto
			})
		);
	}
}
