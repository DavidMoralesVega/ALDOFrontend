import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RequestWritten, RequestWrittenAdapter, UpdateRequestWrittenDto } from '../entities';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RequestWrittenFacade } from '../facades/request-written.facade';
import { MatDialog } from '@angular/material/dialog';
import { RequestWrittenCreateUpdateComponent } from '../components/createUpdate/container/createUpdate.component';

@Component({
	selector: 'z-request-written',
	templateUrl: './request-written.component.html'
})
export class RequestWrittenComponent implements OnInit, AfterViewInit, OnDestroy {
	public findAllResponse$: Observable<Response<RequestWritten[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;
	private destroy$ = new Subject<void>();

	public dataSource!: MatTableDataSource<RequestWritten>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdRequestWritten',
		'RWTitle',
		'RWSummary',
		'IdreqWrLeg',
		'RWPublicationDate',
		'RWIssueDate',
		'RWDateRegister',
		'RWVisibility',
		'IdUser',
		'RWState',
		'z-actions'
	];

	private readonly pagination: Pagination = {
		limit: 100000,
		offset: 0,
		filter: 'ALL'
	};

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(
		private readonly requestWrittenFacade: RequestWrittenFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.requestWrittenFacade.findAllResponse$;
		this.findAllIsLoading$ = this.requestWrittenFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.requestWrittenFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.requestWrittenFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<RequestWritten[]> | null) => {
					setTimeout(() => {
						this.dataSource = new MatTableDataSource(response?.data);
						this.dataSource.paginator = this.paginator;
						this.dataSource.sort = this.sort;
					}, 10);
				}
			})
		);
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
	}

	changeState(requestWrittenAdapter: RequestWrittenAdapter) {
		const updateRequestWrittenDto: UpdateRequestWrittenDto = {
			RWState: !requestWrittenAdapter.RWState
		};

		this.requestWrittenFacade.update(
			requestWrittenAdapter.IdRequestWritten,
			updateRequestWrittenDto
		);

		setTimeout(() => {
			this.requestWrittenFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openRequestWrittenCreateUpdate(
		action: 'create' | 'update',
		requestWrittenAdapter?: RequestWrittenAdapter
	): void {
		this.matDialog
			.open(RequestWrittenCreateUpdateComponent, {
				width: '500px',
				maxWidth: '560px',
				maxHeight: '100%',
				backdropClass: 'zDialogRounded',
				data: {
					action,
					z: requestWrittenAdapter
				}
			})
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => this.requestWrittenFacade.findAll(this.pagination)
			});
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
