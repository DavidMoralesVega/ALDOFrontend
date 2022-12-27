import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { Call, CallAdapter, UpdateCallDto } from '../entities';
import { CallFacade } from '../facades/call.facade';
import { CallsCreateComponent } from '../components/calls-create/container/calls-create.component';
import { CallsUpdateComponent } from '../components/calls-update/container/calls-update.component';

@Component({
	selector: 'z-calls',
	templateUrl: './calls.component.html',
	styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {
	public findAllResponse$: Observable<Response<Call[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Call>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'call_id',
		'call_title',
		'call_management',
		'call_modality',
		'call_dateUpdate',
		'call_create',
		'CallVisibility',
		'IdUser',
		'call_estado',
		'z-actions'
	];

	private readonly pagination: Pagination = {
		limit: 100000,
		offset: 0,
		filter: 'ALL'
	};

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(private readonly callFacade: CallFacade, private readonly matDialog: MatDialog) {
		this.findAllResponse$ = this.callFacade.findAllResponse$;
		this.findAllIsLoading$ = this.callFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.callFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.callFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Call[]> | null) => {
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

	changeState(callAdapter: CallAdapter) {
		const updateCallDto: UpdateCallDto = {
			call_estado: !callAdapter.call_estado
		};

		this.callFacade.update(callAdapter.call_id, updateCallDto);

		setTimeout(() => {
			this.callFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openCallCreate(): void {
		const dialogRef = this.matDialog.open(CallsCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.callFacade.findAll(this.pagination));
	}

	openCallUpdate(call: Call): void {
		const dialogRef = this.matDialog.open(CallsUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: call
		});
		dialogRef.afterClosed().subscribe(() => this.callFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
