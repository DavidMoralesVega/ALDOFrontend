import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import {
	Resolution,
	ResolutionAdapter,
	UpdateResolutionDto
} from '../entities/models/resolutions.model';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResolutionFacade } from '../facades/resolutions.facade';
import { MatDialog } from '@angular/material/dialog';
import { ResolutionsCreateUpdateComponent } from '../components/createUpdate/container/createUpdate.component';

@Component({
	selector: 'z-resolutions',
	templateUrl: './resolutions.component.html'
})
export class ResolutionsComponent implements OnInit {
	public findAllResponse$: Observable<Response<Resolution[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;
	private destroy$ = new Subject<void>();

	public dataSource!: MatTableDataSource<Resolution>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdResolution',
		'RETitle',
		'RESummary',
		// 'IdresolLeg',
		'REPublicationDate',
		'REIssueDate',
		'REDocumentNumber',
		'REType',
		'REDateRegister',
		'REVisibility',
		'IdUser',
		'REState',
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
		private readonly resolutionFacade: ResolutionFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.resolutionFacade.findAllResponse$;
		this.findAllIsLoading$ = this.resolutionFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.resolutionFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.resolutionFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Resolution[]> | null) => {
					setTimeout(() => {
						console.log(response);

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

	changeState(resolutionAdapter: ResolutionAdapter) {
		const updateResolutionDto: UpdateResolutionDto = {
			REState: !resolutionAdapter.REState
		};

		this.resolutionFacade.update(resolutionAdapter.IdResolution, updateResolutionDto);

		setTimeout(() => {
			this.resolutionFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openResolutionCreateUpdate(
		action: 'create' | 'update',
		resolutionAdapter?: ResolutionAdapter
	): void {
		this.matDialog
			.open(ResolutionsCreateUpdateComponent, {
				width: '500px',
				maxWidth: '560px',
				maxHeight: '100%',
				backdropClass: 'zDialogRounded',
				data: {
					action,
					z: resolutionAdapter
				}
			})
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => this.resolutionFacade.findAll(this.pagination)
			});
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
