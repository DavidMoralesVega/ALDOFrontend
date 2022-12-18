import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';

import * as zSelector from '../store/library.selectors';
import { Library, UpdateLibraryDto } from '../entities';
import { LibraryState } from '../store/library.state';
import {
	LIBRARY_CREATE_REQUESTED,
	LIBRARY_FIND_ALL_REQUESTED,
	LIBRARY_FIND_ONE_REQUESTED,
	LIBRARY_UPDATE_REQUESTED,
	LIBRARY_SEARCH_REQUESTED
} from '../store/library.action';
import { SearchLibrary } from 'src/app/core/entities/interfaces/searchLibrary.interface';

@Injectable()
export class LibraryFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Library> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Library[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Library> | null>;

	// update
	public updateDto$: Observable<UpdateLibraryDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Library> | null>;

	// Search
	public searchData$: Observable<SearchLibrary | null>;
	public searchException$: Observable<Exception | null>;
	public searchIsLoading$: Observable<boolean>;
	public searchResponse$: Observable<Response<Library[]> | null>;

	constructor(private readonly store: Store<LibraryState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getLibraryCreateDto);
		this.createException$ = this.store.select(zSelector.getLibraryCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getLibraryCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getLibraryCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getLibraryFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getLibraryFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getLibraryFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getLibraryFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getLibraryFindOneId);
		this.findOneException$ = this.store.select(zSelector.getLibraryFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getLibraryFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getLibraryFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getLibraryUpdateDto);
		this.updateId$ = this.store.select(zSelector.getLibraryUpdateId);
		this.updateException$ = this.store.select(zSelector.getLibraryUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getLibraryUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getLibraryUpdateResponse);

		// search
		this.searchData$ = this.store.select(zSelector.getLibrarySearchPagination);
		this.searchException$ = this.store.select(zSelector.getLibrarySearchException);
		this.searchIsLoading$ = this.store.select(zSelector.getLibrarySearchIsLoading);
		this.searchResponse$ = this.store.select(zSelector.getLibrarySearchResponse);
	}

	create(createLibraryDto: FormData) {
		this.store.dispatch(LIBRARY_CREATE_REQUESTED({ payload: createLibraryDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(LIBRARY_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(LIBRARY_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateLibraryDto: UpdateLibraryDto) {
		this.store.dispatch(
			LIBRARY_UPDATE_REQUESTED({
				id,
				payload: updateLibraryDto
			})
		);
	}

	search(searchLibrary: SearchLibrary) {
		this.store.dispatch(LIBRARY_SEARCH_REQUESTED({ payload: searchLibrary }));
	}
}
