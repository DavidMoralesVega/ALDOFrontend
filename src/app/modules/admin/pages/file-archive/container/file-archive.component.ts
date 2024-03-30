import { Component, ViewChild } from '@angular/core';
import { FilesArchive, FilesArchiveAdapter, UpdateFilesArchiveDto } from '../entities';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FilesArchiveFacade } from '../facades/file-archive.facade';
import { MatDialog } from '@angular/material/dialog';
import { FileArchiveCreateUpdateComponent } from '../components/createUpdate/container/createUpdate.component';

@Component({
	selector: 'z-file-archive',
	templateUrl: './file-archive.component.html'
})
export class FileArchiveComponent {
	public findAllResponse$: Observable<Response<FilesArchive[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<FilesArchive>;
	private subscriptors: Subscription[] = [];
	private destroy$ = new Subject<void>();

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
					// console.log({ response });
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

	openFileArchiveCreateUpdate(
		action: 'create' | 'update',
		filesArchiveAdapter?: FilesArchiveAdapter
	): void {
		this.matDialog
			.open(FileArchiveCreateUpdateComponent, {
				width: '500px',
				maxWidth: '560px',
				maxHeight: '100%',
				backdropClass: 'zDialogRounded',
				data: {
					action,
					z: filesArchiveAdapter
				}
			})
			.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: () => this.filesArchiveFacade.findAll(this.pagination)
			});
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
