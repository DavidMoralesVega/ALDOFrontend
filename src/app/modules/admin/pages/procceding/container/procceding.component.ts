import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { Procceding, ProccedingAdapter, UpdateProccedingDto } from '../entities';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProccedingFacade } from '../facades/procceding.facade';
import { MatDialog } from '@angular/material/dialog';
import { ProccedingUpdateComponent } from '../components/procceding-update/container/procceding-update.component';
import { ProccedingCreateComponent } from '../components/procceding-create/container/procceding-create.component';
@Component({
	selector: 'z-procceding',
	templateUrl: './procceding.component.html',
	styleUrls: ['./procceding.component.scss']
})
export class ProccedingComponent implements OnInit {
	public findAllResponse$: Observable<Response<Procceding[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Procceding>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'ac_id',
		'ac_category',
		'acDateRegister',
		'IdUser',
		'ac_State',
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
		private readonly proccedingFacade: ProccedingFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.proccedingFacade.findAllResponse$;
		this.findAllIsLoading$ = this.proccedingFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.proccedingFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.proccedingFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}
	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Procceding[]> | null) => {
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

	changeState(proccedingAdapter: ProccedingAdapter) {
		const updateProccedingDto: UpdateProccedingDto = {
			ac_State: !proccedingAdapter.ac_State
		};

		this.proccedingFacade.update(proccedingAdapter.ac_id, updateProccedingDto);

		setTimeout(() => {
			this.proccedingFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openProccedingCreate(): void {
		const dialogRef = this.matDialog.open(ProccedingCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.proccedingFacade.findAll(this.pagination));
	}

	openProccedingUpdate(procceding: Procceding): void {
		const dialogRef = this.matDialog.open(ProccedingUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: procceding
		});
		dialogRef.afterClosed().subscribe(() => this.proccedingFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
