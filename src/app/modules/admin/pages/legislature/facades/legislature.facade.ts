import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Legislature, CreateLegislatureDto, UpdateLegislatureDto } from '../entities';
import * as zSelector from '../store/legislature.selectors';
import { LegislatureState } from '../store/legislature.state';
import {
	LEGISLATURE_CREATE_REQUESTED,
	LEGISLATURE_FIND_ALL_REQUESTED,
	LEGISLATURE_FIND_ONE_REQUESTED,
	LEGISLATURE_UPDATE_REQUESTED
} from '../store/legislature.action';

@Injectable()
export class LegislatureFacade {
	// create
	public createDto$: Observable<CreateLegislatureDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Legislature> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Legislature[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Legislature> | null>;

	// update
	public updateDto$: Observable<UpdateLegislatureDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Legislature> | null>;

	constructor(private readonly store: Store<LegislatureState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getLegislatureCreateDto);
		this.createException$ = this.store.select(zSelector.getLegislatureCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getLegislatureCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getLegislatureCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getLegislatureFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getLegislatureFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getLegislatureFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getLegislatureFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getLegislatureFindOneId);
		this.findOneException$ = this.store.select(zSelector.getLegislatureFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getLegislatureFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getLegislatureFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getLegislatureUpdateDto);
		this.updateId$ = this.store.select(zSelector.getLegislatureUpdateId);
		this.updateException$ = this.store.select(zSelector.getLegislatureUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getLegislatureUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getLegislatureUpdateResponse);
	}

	create(createLegislatureDto: CreateLegislatureDto) {
		this.store.dispatch(LEGISLATURE_CREATE_REQUESTED({ payload: createLegislatureDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(LEGISLATURE_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(LEGISLATURE_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateLegislatureDto: UpdateLegislatureDto) {
		this.store.dispatch(
			LEGISLATURE_UPDATE_REQUESTED({
				id,
				payload: updateLegislatureDto
			})
		);
	}
}
