import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Legislature, LegislatureAdapter, UpdateLegislatureDto } from '../entities';
import { Pagination, Response } from 'src/app/core/entities';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { LegislatureFacade } from '../facades/legislature.facade';
import { LegislatureCreateComponent } from '../components/legislature-create/container/legislature-create.component';
import { LegislatureUpdateComponent } from '../components/legislature-update/container/legislature-update.component';

@Component({
	selector: 'z-legislature',
	templateUrl: './legislature.component.html'
})
export class LegislatureComponent implements OnInit {
	public findAllResponse$: Observable<Response<LegislatureAdapter[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<LegislatureAdapter>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdLegislatura',
		'LegDescripcion',
		'LegEstado',
		'LeDateRegister',
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
		private readonly legislatureFacade: LegislatureFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.legislatureFacade.findAllResponse$;
		this.findAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.legislatureFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.legislatureFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<LegislatureAdapter[]> | null) => {
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

	changeState(legislatureAdapter: LegislatureAdapter) {
		const updateLegislatureDto: UpdateLegislatureDto = {
			LegEstado: !legislatureAdapter.LegEstado
		};

		this.legislatureFacade.update(legislatureAdapter.IdLegislatura, updateLegislatureDto);

		setTimeout(() => {
			this.legislatureFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openLegislatureCreate(): void {
		const dialogRef = this.matDialog.open(LegislatureCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.legislatureFacade.findAll(this.pagination));
	}

	openLegislatureUpdate(legislature: Legislature): void {
		const dialogRef = this.matDialog.open(LegislatureUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: legislature
		});
		dialogRef.afterClosed().subscribe(() => this.legislatureFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
