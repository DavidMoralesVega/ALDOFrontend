import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category, CategoryAdapter, UpdateCategoryDto } from '../entities';
import { Pagination, Response } from 'src/app/core/entities';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoryFacade } from '../facades/category.facade';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCreateComponent } from '../components/category-create/container/category-create.component';
import { CategoryUpdateComponent } from '../components/category-update/container/category-update.component';

@Component({
	selector: 'z-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	public findAllResponse$: Observable<Response<Category[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Category>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'cat_id',
		'cat_nombre',
		'cat_estado',
		'cat_creado',
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
		private readonly categoryFacade: CategoryFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.categoryFacade.findAllResponse$;
		this.findAllIsLoading$ = this.categoryFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.categoryFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.categoryFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Category[]> | null) => {
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

	changeState(categoryAdapter: CategoryAdapter) {
		const updateCategoryDto: UpdateCategoryDto = {
			cat_estado: !categoryAdapter.cat_estado
		};

		this.categoryFacade.update(categoryAdapter.cat_id, updateCategoryDto);

		setTimeout(() => {
			this.categoryFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openCategoryCreate(): void {
		const dialogRef = this.matDialog.open(CategoryCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.categoryFacade.findAll(this.pagination));
	}

	openCategoryUpdate(category: Category): void {
		const dialogRef = this.matDialog.open(CategoryUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: category
		});
		dialogRef.afterClosed().subscribe(() => this.categoryFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
