import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { DepartamentLaw, DepartamentLawAdapter, UpdateDepartamentLawDto } from '../entities';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DepartamentLawFacade } from '../facades/departament-law.facade';
import { MatDialog } from '@angular/material/dialog';
import { DepartamentLawCreateComponent } from '../components/departament-law-create/container/departament-law-create.component';
import { DepartamentLawUpdateComponent } from '../components/departament-law-update/container/departament-law-update.component';

@Component({
	selector: 'z-departament-law',
	templateUrl: './departament-law.component.html'
})
export class DepartamentLawComponent implements OnInit, AfterViewInit, OnDestroy {
	public findAllResponse$: Observable<Response<DepartamentLawAdapter[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<DepartamentLawAdapter>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdDepartamentaLaw',
		'dtarea',
		'DTTitle',
		'DTSummary',
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

	openDepartamentLawCreate(): void {
		const dialogRef = this.matDialog.open(DepartamentLawCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.departamentLawFacade.findAll(this.pagination));
	}

	openDepartamentLawUpdate(departamentLaw: DepartamentLaw): void {
		const dialogRef = this.matDialog.open(DepartamentLawUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: departamentLaw
		});
		dialogRef.afterClosed().subscribe(() => this.departamentLawFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
