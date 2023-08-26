import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { RequestReports, CreateRequestReportsDto, UpdateRequestReportsDto } from '../entities';
import * as zSelector from '../store/request-reports.selectors';
import { RequestReportsState } from '../store/request-reports.state';
import {
	REQUESTREPORTS_CREATE_REQUESTED,
	REQUESTREPORTS_FIND_ALL_REQUESTED,
	REQUESTREPORTS_FIND_ONE_REQUESTED,
	REQUESTREPORTS_UPDATE_REQUESTED
} from '../store/request-reports.action';

@Injectable()
export class RequestReportsFacade {
	// create
	public createDto$: Observable<CreateRequestReportsDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<RequestReports> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<RequestReports[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<RequestReports> | null>;

	// update
	public updateDto$: Observable<UpdateRequestReportsDto | FormData | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<RequestReports> | null>;

	constructor(private readonly store: Store<RequestReportsState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getRequestReportsCreateDto);
		this.createException$ = this.store.select(zSelector.getRequestReportsCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getRequestReportsCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getRequestReportsCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getRequestReportsFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getRequestReportsFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getRequestReportsFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getRequestReportsFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getRequestReportsFindOneId);
		this.findOneException$ = this.store.select(zSelector.getRequestReportsFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getRequestReportsFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getRequestReportsFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getRequestReportsUpdateDto);
		this.updateId$ = this.store.select(zSelector.getRequestReportsUpdateId);
		this.updateException$ = this.store.select(zSelector.getRequestReportsUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getRequestReportsUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getRequestReportsUpdateResponse);
	}

	create(createCategoryDto: CreateRequestReportsDto) {
		this.store.dispatch(REQUESTREPORTS_CREATE_REQUESTED({ payload: createCategoryDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(REQUESTREPORTS_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(REQUESTREPORTS_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updateRequestReportsDto: FormData | UpdateRequestReportsDto) {
		this.store.dispatch(
			REQUESTREPORTS_UPDATE_REQUESTED({
				id,
				payload: updateRequestReportsDto
			})
		);
	}
}
