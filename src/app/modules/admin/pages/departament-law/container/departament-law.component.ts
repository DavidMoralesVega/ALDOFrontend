import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { DepartamentLawAdapter } from '../entities';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DepartamentLawFacade } from '../facades/departament-law.facade';
import { MatDialog } from '@angular/material/dialog';
import { DepartamentLawCreateUpdateComponent } from '../components/createUpdate/container/createUpdate.component';

@Component({
	selector: 'z-departament-law',
	templateUrl: './departament-law.component.html'
})
export class DepartamentLawComponent implements OnInit, AfterViewInit, OnDestroy {
	public findAllResponse$: Observable<Response<DepartamentLawAdapter[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;
	private destroy$ = new Subject<void>();

	public dataSource!: MatTableDataSource<DepartamentLawAdapter>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdDepartamentaLaw',
		'dtarea',
		'DTTitle',
		'DTSummary',
		'dtpublicationdate',
		'DTIssueDate',
		'DTDocumentNumber',
		'DTDateRegister',
		'DTVisibility',
		'IdUser',
		'DTState',
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
		private readonly departamentLawFacade: DepartamentLawFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.departamentLawFacade.findAllResponse$;
		this.findAllIsLoading$ = this.departamentLawFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.departamentLawFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.departamentLawFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<DepartamentLawAdapter[]> | null) => {
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

	changeState(departamentLawAdapter: DepartamentLawAdapter) {
		const updateDepartamentLawDto = {
			dtstate: !departamentLawAdapter.dtstate
		};

		this.departamentLawFacade.update(
			departamentLawAdapter.IdDepartamentaLaw,
			updateDepartamentLawDto
		);

		setTimeout(() => {
			this.departamentLawFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openDepartamentLawCreateUpdate(
		action: 'create' | 'update',
		departamentLawAdapter?: DepartamentLawAdapter
	): void {
		this.matDialog
			.open(DepartamentLawCreateUpdateComponent, {
				width: '500px',
				maxWidth: '560px',
				maxHeight: '100%',
				backdropClass: 'zDialogRounded',
				data: {
					action,
					z: departamentLawAdapter
				}
			})
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => this.departamentLawFacade.findAll(this.pagination)
			});
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
