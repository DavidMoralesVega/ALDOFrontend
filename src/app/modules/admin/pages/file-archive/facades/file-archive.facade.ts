import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { FilesArchive, UpdateFilesArchiveDto } from '../entities/models/file-archive.model';
import { FilesArchiveState } from '../store/file-archive.state';
import * as zSelector from '../store/file-archive.selectors';
import {
	FILESARCHIVE_CREATE_REQUESTED,
	FILESARCHIVE_FIND_ALL_REQUESTED,
	FILESARCHIVE_FIND_ONE_REQUESTED,
	FILESARCHIVE_UPDATE_REQUESTED
} from '../store/file-archive.action';

@Injectable()
export class FilesArchiveFacade {
	// create
	public createDto$: Observable<FormData | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<FilesArchive> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<FilesArchive[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<FilesArchive> | null>;

	// update
	public updateDto$: Observable<UpdateFilesArchiveDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<FilesArchive> | null>;

	constructor(private readonly store: Store<FilesArchiveState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getFilesArchiveCreateDto);
		this.createException$ = this.store.select(zSelector.getFilesArchiveCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getFilesArchiveCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getFilesArchiveCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getFilesArchiveFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getFilesArchiveFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getFilesArchiveFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getFilesArchiveFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getFilesArchiveFindOneId);
		this.findOneException$ = this.store.select(zSelector.getFilesArchiveFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getFilesArchiveFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getFilesArchiveFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getFilesArchiveUpdateDto);
		this.updateId$ = this.store.select(zSelector.getFilesArchiveUpdateId);
		this.updateException$ = this.store.select(zSelector.getFilesArchiveUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getFilesArchiveUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getFilesArchiveUpdateResponse);
	}

	create(createFilesArchiveDto: FormData) {
		this.store.dispatch(FILESARCHIVE_CREATE_REQUESTED({ payload: createFilesArchiveDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(FILESARCHIVE_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(FILESARCHIVE_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateFilesArchiveDto: UpdateFilesArchiveDto | FormData) {
		this.store.dispatch(
			FILESARCHIVE_UPDATE_REQUESTED({
				id,
				payload: updateFilesArchiveDto
			})
		);
	}
}
