import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { AdmPais, CreateAdmPaisDto, UpdateAdmPaisDto } from '../entities';
import * as zSelector from '../store/adm-pais.selectors';
import { AdmPaisState } from '../store/adm-pais.state';
import {
	ADMPAIS_CREATE_REQUESTED,
	ADMPAIS_FIND_ALL_REQUESTED,
	ADMPAIS_FIND_ONE_REQUESTED,
	ADMPAIS_UPDATE_REQUESTED
} from '../store/adm-pais.action';

@Injectable()
export class AdmPaisFacade {
	// create
	public createDto$: Observable<CreateAdmPaisDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<AdmPais> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<AdmPais[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<AdmPais> | null>;

	// update
	public updateDto$: Observable<UpdateAdmPaisDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<AdmPais> | null>;

	constructor(private readonly store: Store<AdmPaisState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getAdmPaisCreateDto);
		this.createException$ = this.store.select(zSelector.getAdmPaisCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getAdmPaisCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getAdmPaisCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getAdmPaisFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getAdmPaisFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getAdmPaisFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getAdmPaisFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getAdmPaisFindOneId);
		this.findOneException$ = this.store.select(zSelector.getAdmPaisFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getAdmPaisFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getAdmPaisFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getAdmPaisUpdateDto);
		this.updateId$ = this.store.select(zSelector.getAdmPaisUpdateId);
		this.updateException$ = this.store.select(zSelector.getAdmPaisUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getAdmPaisUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getAdmPaisUpdateResponse);
	}

	create(createAdmPaisDto: CreateAdmPaisDto) {
		this.store.dispatch(ADMPAIS_CREATE_REQUESTED({ payload: createAdmPaisDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(ADMPAIS_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(ADMPAIS_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateAdmPaisDto: UpdateAdmPaisDto) {
		this.store.dispatch(
			ADMPAIS_UPDATE_REQUESTED({
				id,
				payload: updateAdmPaisDto
			})
		);
	}
}
