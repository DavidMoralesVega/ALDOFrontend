import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/departament-law.selectors';
import {
	DEPARTAMENTLAW_CREATE_REQUESTED,
	DEPARTAMENTLAW_FIND_ALL_REQUESTED,
	DEPARTAMENTLAW_FIND_ONE_REQUESTED,
	DEPARTAMENTLAW_UPDATE_REQUESTED
} from '../store/departament-law.action';
import { CreateDepartamentLawDto, DepartamentLaw, UpdateDepartamentLawDto } from '../entities';
import { DepartamentLawState } from '../store/departament-law.state';

@Injectable()
export class DepartamentLawFacade {
	// create
	public createDto$: Observable<CreateDepartamentLawDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<DepartamentLaw> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<DepartamentLaw[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<DepartamentLaw> | null>;

	// update
	public updateDto$: Observable<UpdateDepartamentLawDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<DepartamentLaw> | null>;

	constructor(private readonly store: Store<DepartamentLawState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getDepartamentLawCreateDto);
		this.createException$ = this.store.select(zSelector.getDepartamentLawCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getDepartamentLawCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getDepartamentLawCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getDepartamentLawFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getDepartamentLawFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getDepartamentLawFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getDepartamentLawFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getDepartamentLawFindOneId);
		this.findOneException$ = this.store.select(zSelector.getDepartamentLawFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getDepartamentLawFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getDepartamentLawFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getDepartamentLawUpdateDto);
		this.updateId$ = this.store.select(zSelector.getDepartamentLawUpdateId);
		this.updateException$ = this.store.select(zSelector.getDepartamentLawUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getDepartamentLawUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getDepartamentLawUpdateResponse);
	}

	create(createDepartamentLawDto: CreateDepartamentLawDto) {
		this.store.dispatch(DEPARTAMENTLAW_CREATE_REQUESTED({ payload: createDepartamentLawDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(DEPARTAMENTLAW_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(DEPARTAMENTLAW_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateDepartamentLawDto: UpdateDepartamentLawDto) {
		this.store.dispatch(
			DEPARTAMENTLAW_UPDATE_REQUESTED({
				id,
				payload: updateDepartamentLawDto
			})
		);
	}
}
