import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RequestReports, UpdateRequestReportsDto, RequestReportsAdapter } from '../entities';
import { RequestReportsFacade } from '../facades/request-reports.facade';
import { RequestReportsUpdateComponent } from '../components/request-reports-update/container/request-reports-update.component';
import { RequestReportsCreateComponent } from '../components/request-reports-create/container/request-reports-create.component';

@Component({
	selector: 'z-request-reports',
	templateUrl: './request-reports.component.html',
	styleUrls: ['./request-reports.component.scss']
})
export class RequestReportsComponent implements OnInit {
	public findAllResponse$: Observable<Response<RequestReports[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<RequestReports>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'reqR_id',
		'reqR_num',
		'reqR_petitioner',
		'reqR_addressee',
		'reqR_abstract',
		'reqR_listPdf',
		'reqR_management',
		'reqR_create',
		'reqR_condition',
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
		private readonly requestReportsFacade: RequestReportsFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.requestReportsFacade.findAllResponse$;
		this.findAllIsLoading$ = this.requestReportsFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.requestReportsFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.requestReportsFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<RequestReports[]> | null) => {
					// console.log(response);
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

	changeState(requestReportsAdapter: RequestReportsAdapter) {
		const updateRequestReportsDto: UpdateRequestReportsDto = {
			reqR_condition: requestReportsAdapter.reqR_condition
		};

		this.requestReportsFacade.update(requestReportsAdapter.reqR_id, updateRequestReportsDto);

		setTimeout(() => {
			this.requestReportsFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openCategoryCreate(): void {
		const dialogRef = this.matDialog.open(RequestReportsCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.requestReportsFacade.findAll(this.pagination));
	}

	openCategoryUpdate(requestReports: RequestReports): void {
		const dialogRef = this.matDialog.open(RequestReportsUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: requestReports
		});
		dialogRef.afterClosed().subscribe(() => this.requestReportsFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
