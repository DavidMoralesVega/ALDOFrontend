import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { Library } from '../entities';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LibraryFacade } from '../facades/library.facade';
import { MatDialog } from '@angular/material/dialog';
import { LibraryAdapter, UpdateLibraryDto } from '../entities/models/library.model';
import { LibraryUpdateComponent } from '../components/library-update/container/library-update.component';
import { LibraryCreateComponent } from '../components/library-create/container/library-create.component';

@Component({
	selector: 'z-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit, AfterViewInit, OnDestroy {
	public findAllResponse$: Observable<Response<Library[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Library>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdLibrary',
		'LTitle',
		'LDescription',
		'LVisibility',
		'LCategory',
		'LModule',
		'LState',
		'LDateRegister',
		'IdUser',
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
		private readonly libraryFacade: LibraryFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.libraryFacade.findAllResponse$;
		this.findAllIsLoading$ = this.libraryFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.libraryFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.libraryFacade.findAll(this.pagination);
	}
	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Library[]> | null) => {
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

	changeState(libraryAdapter: LibraryAdapter) {
		const updateLibraryDto: UpdateLibraryDto = {
			lstate: !libraryAdapter.lstate
		};

		this.libraryFacade.update(libraryAdapter.IdLibrary, updateLibraryDto);

		setTimeout(() => {
			this.libraryFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openLibraryCreate(): void {
		const dialogRef = this.matDialog.open(LibraryCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.libraryFacade.findAll(this.pagination));
	}

	openLibraryUpdate(library: Library): void {
		const dialogRef = this.matDialog.open(LibraryUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: library
		});
		dialogRef.afterClosed().subscribe(() => this.libraryFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
