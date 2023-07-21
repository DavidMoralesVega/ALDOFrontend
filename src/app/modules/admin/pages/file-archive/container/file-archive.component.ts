import { Component, ViewChild } from '@angular/core';
import { FilesArchive, FilesArchiveAdapter, UpdateFilesArchiveDto } from '../entities';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FilesArchiveFacade } from '../facades/file-archive.facade';
import { MatDialog } from '@angular/material/dialog';
import { FileArchiveCreateComponent } from '../components/file-archive-create/container/file-archive-create.component';
import { FileArchiveUpdateComponent } from '../components/file-archive-update/container/file-archive-update.component';

@Component({
	selector: 'z-file-archive',
	templateUrl: './file-archive.component.html',
	styles: []
})
export class FileArchiveComponent {
	public findAllResponse$: Observable<Response<FilesArchive[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<FilesArchive>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'arch_id',
		'arch_code',
		'arch_name',
		'IdresolLeg',
		'arch_creado',
		'arch_State',
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
		private readonly filesArchiveFacade: FilesArchiveFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.filesArchiveFacade.findAllResponse$;
		this.findAllIsLoading$ = this.filesArchiveFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.filesArchiveFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.filesArchiveFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<FilesArchive[]> | null) => {
					console.log({ response });
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

	changeState(filesArchiveAdapter: FilesArchiveAdapter) {
		const updateFilesArchiveDto: UpdateFilesArchiveDto = {
			arch_State: !filesArchiveAdapter.arch_State
		};

		this.filesArchiveFacade.update(filesArchiveAdapter.arch_id, updateFilesArchiveDto);

		setTimeout(() => {
			this.filesArchiveFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openFilesArchiveCreate(): void {
		const dialogRef = this.matDialog.open(FileArchiveCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.filesArchiveFacade.findAll(this.pagination));
	}

	openFilesArchiveUpdate(filesArchive: FilesArchive): void {
		const dialogRef = this.matDialog.open(FileArchiveUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: filesArchive
		});
		dialogRef.afterClosed().subscribe(() => this.filesArchiveFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
