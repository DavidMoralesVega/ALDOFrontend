import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Pagination, Response } from 'src/app/core/entities';
import { Post, PostAdapter, UpdatePostDto } from '../entities';
import { MatTableDataSource } from '@angular/material/table';
import { PostFacade } from '../facades/post.facade';
import { CategoryFacade } from '../../category/facades/category.facade';
import { PostCreateComponent } from '../components/post-create/container/post-create.component';
import { PostUpdateComponent } from '../components/post-update/container/post-update.component';

@Component({
	selector: 'z-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	public findAllResponse$: Observable<Response<Post[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<Post>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'post_id',
		'post_author',
		'post_content',
		'post_tittle',
		'cat_post_id',
		'post_creado',
		'post_estado',
		'z-actions'
	];

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(
		private readonly postFacade: PostFacade,
		private readonly categoryFacade: CategoryFacade,
		private readonly matDialog: MatDialog
	) {
		this.findAllResponse$ = this.postFacade.findAllResponse$;
		this.findAllIsLoading$ = this.postFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.postFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.postFacade.findAll(this.pagination);
		this.categoryFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<Post[]> | null) => {
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

	changeState(postAdapter: PostAdapter) {
		const updatePostDto: UpdatePostDto = {
			post_estado: !postAdapter.post_estado
		};

		this.postFacade.update(postAdapter.post_id, updatePostDto);

		setTimeout(() => {
			this.categoryFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	// Metodo create
	openAdmDepartamentoCreate() {
		const dialogRef = this.matDialog.open(PostCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.postFacade.findAll(this.pagination));
	}
	openAdmDepartamentoUpdate(post: Post): void {
		const dialogRef = this.matDialog.open(PostUpdateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%',
			data: post
		});
		dialogRef.afterClosed().subscribe(() => this.postFacade.findAll(this.pagination));
	}

	ngOnDestroy(): void {
		this.subscriptors.forEach((subscription: Subscription) => subscription.unsubscribe());
		this.subscriptors = [];
	}
}
