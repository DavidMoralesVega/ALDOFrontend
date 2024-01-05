import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { Procceding, ProccedingAdapter, UpdateProccedingDto } from '../entities';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProccedingFacade } from '../facades/procceding.facade';
import { MatDialog } from '@angular/material/dialog';
import { ProccedingCreateUpdateComponent } from '../components/createUpdate/container/createUpdate.component';
@Component({
	selector: 'z-procceding',
	templateUrl: './procceding.component.html'
})
export class ProccedingComponent implements OnInit {
	public findAllResponse$: Observable<Response<Procceding[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	private destroy$ = new Subject<void>();
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

	openProceddingCreateUpdate(
		action: 'create' | 'update',
		proccedingAdapter?: ProccedingAdapter
	): void {
		this.matDialog
			.open(ProccedingCreateUpdateComponent, {
				width: '500px',
				maxWidth: '560px',
				maxHeight: '100%',
				backdropClass: 'zDialogRounded',
				data: {
					action,
					z: proccedingAdapter
				}
			})
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => this.proccedingFacade.findAll(this.pagination)
			});
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
