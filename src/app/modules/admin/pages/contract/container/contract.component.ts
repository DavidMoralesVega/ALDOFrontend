import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { ContractCreateComponent } from '../components/contract-create/container/contract-create.component';
import { ContractUpdateComponent } from '../components/contract-update/container/contract-update.component';
import { Contract, ContractAdapter, UpdateContractDto } from '../entities';
import { ContractFacade } from '../facades/contract.facade';

@Component({
	selector: 'z-contract',
	templateUrl: './contract.component.html',
	styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
	public findAllResponse$: Observable<Response<Contract[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Contract>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdContract',
		'CTTitle',
		'CTSummary',
		'CTIssueDate',
		'CTDocumentNumber',
		'CTType',
		'CTDateRegister',
		'CTVisibility',
		'IdUser',
		'CTState',
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
		private readonly contractFacade: ContractFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.contractFacade.findAllResponse$;
		this.findAllIsLoading$ = this.contractFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.contractFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.contractFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Contract[]> | null) => {
					console.log(response);

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

	changeState(resolutionAdapter: ContractAdapter) {
		const updateContractDto: UpdateContractDto = {
			CTState: !resolutionAdapter.CTState
		};

		this.contractFacade.update(resolutionAdapter.IdContract, updateContractDto);

		setTimeout(() => {
			this.contractFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openContractCreate(): void {
		const dialogRef = this.matDialog.open(ContractCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.contractFacade.findAll(this.pagination));
	}

	openContractUpdate(departamentLaw: Contract): void {
		const dialogRef = this.matDialog.open(ContractUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: departamentLaw
		});
		dialogRef.afterClosed().subscribe(() => this.contractFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
