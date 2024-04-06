import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Category, CategoryAdapter, CreateCategoryDto, UpdateCategoryDto } from '../entities';
import * as zSelector from '../store/category.selectors';
import { CategoryState } from '../store/category.state';
import {
	CATEGORY_CREATE_REQUESTED,
	CATEGORY_FIND_ALL_REQUESTED,
	CATEGORY_FIND_ONE_REQUESTED,
	CATEGORY_UPDATE_REQUESTED
} from '../store/category.action';

@Injectable()
export class CategoryFacade {
	// create
	public createDto$: Observable<CreateCategoryDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<CategoryAdapter> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<CategoryAdapter[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<CategoryAdapter> | null>;

	// update
	public updateDto$: Observable<UpdateCategoryDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<CategoryAdapter> | null>;

	constructor(private readonly store: Store<CategoryState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getCategoryCreateDto);
		this.createException$ = this.store.select(zSelector.getCategoryCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getCategoryCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getCategoryCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getCategoryFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getCategoryFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getCategoryFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getCategoryFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getCategoryFindOneId);
		this.findOneException$ = this.store.select(zSelector.getCategoryFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getCategoryFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getCategoryFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getCategoryUpdateDto);
		this.updateId$ = this.store.select(zSelector.getCategoryUpdateId);
		this.updateException$ = this.store.select(zSelector.getCategoryUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getCategoryUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getCategoryUpdateResponse);
	}

	create(createCategoryDto: CreateCategoryDto) {
		this.store.dispatch(CATEGORY_CREATE_REQUESTED({ payload: createCategoryDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(CATEGORY_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(CATEGORY_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateCategoryDto: UpdateCategoryDto) {
		this.store.dispatch(
			CATEGORY_UPDATE_REQUESTED({
				id,
				payload: updateCategoryDto
			})
		);
	}
}
