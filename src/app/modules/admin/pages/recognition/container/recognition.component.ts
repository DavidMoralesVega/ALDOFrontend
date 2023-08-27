import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { RecognitionCreateComponent } from '../components/recognition-create/container/recognition-create.component';
import { RecognitionUpdateComponent } from '../components/recognition-update/container/recognition-update.component';
import { Recognition, RecognitionAdapter, UpdateRecognitionDto } from '../entities';
import { RecognitionFacade } from '../facades/recognition.facade';
@Component({
	selector: 'z-recognition',
	templateUrl: './recognition.component.html'
})
export class RecognitionComponent implements OnInit, AfterViewInit, OnDestroy {
	public findAllResponse$: Observable<Response<Recognition[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Recognition>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdRecognition',
		'RTitle',
		'RSummary',
		'RPublicationDate',
		'RIssueDate',
		'REventDate',
		'RDateRegister',
		'RVisibility',
		'IdUser',
		'RState',
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
		private readonly recognitionFacade: RecognitionFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.recognitionFacade.findAllResponse$;
		this.findAllIsLoading$ = this.recognitionFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.recognitionFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.recognitionFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Recognition[]> | null) => {
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

	changeState(recognitionAdapter: RecognitionAdapter) {
		const updateRecognitionDto: UpdateRecognitionDto = {
			RState: !recognitionAdapter.RState
		};

		this.recognitionFacade.update(recognitionAdapter.IdRecognition, updateRecognitionDto);

		setTimeout(() => {
			this.recognitionFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openRecognitionCreate(): void {
		const dialogRef = this.matDialog.open(RecognitionCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.recognitionFacade.findAll(this.pagination));
	}

	openRecognitionUpdate(recognition: Recognition): void {
		const dialogRef = this.matDialog.open(RecognitionUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: recognition
		});
		dialogRef.afterClosed().subscribe(() => this.recognitionFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
