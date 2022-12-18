import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/user.selectors';
import { CreateUserDto, UpdateUserDto, User } from '../entities/models/user.model';
import { UserState } from '../store/user.state';
import {
	USER_CREATE_REQUESTED,
	USER_FIND_ALL_REQUESTED,
	USER_UPDATE_REQUESTED
} from '../store/user.action';

@Injectable()
export class UserFacade {
	// create
	public createDto$: Observable<CreateUserDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<User> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<User[]> | null>;

	// update
	public updateDto$: Observable<UpdateUserDto | CreateUserDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<User> | null>;

	constructor(private readonly store: Store<UserState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getUserCreateDto);
		this.createException$ = this.store.select(zSelector.getUserCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getUserCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getUserCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getUserFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getUserFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getUserFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getUserFindAllResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getUserUpdateDto);
		this.updateId$ = this.store.select(zSelector.getUserUpdateId);
		this.updateException$ = this.store.select(zSelector.getUserUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getUserUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getUserUpdateResponse);
	}

	create(createUserDto: CreateUserDto) {
		this.store.dispatch(USER_CREATE_REQUESTED({ payload: createUserDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(USER_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	update(id: string, updateUserDto: UpdateUserDto | CreateUserDto) {
		this.store.dispatch(
			USER_UPDATE_REQUESTED({
				id,
				payload: updateUserDto
			})
		);
	}
}
