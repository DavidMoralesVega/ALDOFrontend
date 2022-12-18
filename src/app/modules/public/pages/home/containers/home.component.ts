import { Component, OnInit } from '@angular/core';
import { PostFacade } from '../../../../admin/pages/post/facades/post.facade';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../../admin/pages/post/entities/models/post.model';
import { Response } from 'src/app/core/entities';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public findAllResponse$: Observable<Response<Post[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataPost: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};

	constructor(private readonly postFacade: PostFacade) {
		this.findAllResponse$ = this.postFacade.findAllResponse$;
		this.findAllIsLoading$ = this.postFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.postFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataPost = response?.data.filter((data) => {
						console.log(data.post_estado);
						if (data.post_estado) {
							return data;
						}
					});

					/* this.dataPost = response?.data;
					console.log(this.dataPost); */
					// console.log(this.dataPost);
				}
			})
		);
	}
}
