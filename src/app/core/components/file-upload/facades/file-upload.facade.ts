import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as zSelector from '../store/file-upload.selectors';
import { ZUploadState, ZUploadStateCreate, ZUploadStateRemove } from '../store/file-upload.state';
import { ZUPLOAD_CREATE_REQUESTED, ZUPLOAD_REMOVE_REQUESTED } from '../store/file-upload.action';

@Injectable()
export class ZUploadFacade {
	public create$: Observable<ZUploadStateCreate>;

	public remove$: Observable<ZUploadStateRemove>;

	private readonly store = inject(Store<ZUploadState>);

	constructor() {
		this.create$ = this.store.select(zSelector.createZUpload);
		this.remove$ = this.store.select(zSelector.removeZUpload);
	}

	create(createFileUploadDto: FormData) {
		this.store.dispatch(ZUPLOAD_CREATE_REQUESTED({ payload: createFileUploadDto }));
	}

	remove(paths: string[]) {
		this.store.dispatch(ZUPLOAD_REMOVE_REQUESTED({ payload: paths }));
	}
}
