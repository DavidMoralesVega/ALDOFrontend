import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/contract.selectors';
import { Contract, UpdateContractDto } from '../entities';
import { ContractState } from '../store/contract.state';
import {
	CONTRACT_CREATE_REQUESTED,
	CONTRACT_FIND_ALL_REQUESTED,
	CONTRACT_FIND_ONE_REQUESTED,
	CONTRACT_UPDATE_REQUESTED
} from '../store/contract.action';

@Injectable()
export class ContractFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Contract> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Contract[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Contract> | null>;

	// update
	public updateDto$: Observable<UpdateContractDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Contract> | null>;

	constructor(private readonly store: Store<ContractState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getContractCreateDto);
		this.createException$ = this.store.select(zSelector.getContractCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getContractCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getContractCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getContractFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getContractFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getContractFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getContractFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getContractFindOneId);
		this.findOneException$ = this.store.select(zSelector.getContractFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getContractFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getContractFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getContractUpdateDto);
		this.updateId$ = this.store.select(zSelector.getContractUpdateId);
		this.updateException$ = this.store.select(zSelector.getContractUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getContractUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getContractUpdateResponse);
	}

	create(createContractDto: FormData) {
		this.store.dispatch(CONTRACT_CREATE_REQUESTED({ payload: createContractDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(CONTRACT_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(CONTRACT_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateContractDto: UpdateContractDto | FormData) {
		this.store.dispatch(
			CONTRACT_UPDATE_REQUESTED({
				id,
				payload: updateContractDto
			})
		);
	}
}
