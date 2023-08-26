import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Post, CreatePostDto, UpdatePostDto } from '../entities';
import * as zSelector from '../store/post.selectors';
import { PostState } from '../store/post.state';
import {
	POST_CREATE_REQUESTED,
	POST_FIND_ALL_REQUESTED,
	POST_FIND_ONE_REQUESTED,
	POST_UPDATE_REQUESTED
} from '../store/post.action';

@Injectable()
export class PostFacade {
	// create
	public createDto$: Observable<CreatePostDto | null>;
	public createException$: Observable<Exception | null>;
	public createIsLoading$: Observable<boolean>;
	public createResponse$: Observable<Response<Post> | null>;

	// findAll
	public findAllPagination$: Observable<Pagination | null>;
	public findAllException$: Observable<Exception | null>;
	public findAllIsLoading$: Observable<boolean>;
	public findAllResponse$: Observable<Response<Post[]> | null>;

	// findOne
	public findOneId$: Observable<string | null>;
	public findOneException$: Observable<Exception | null>;
	public findOneIsLoading$: Observable<boolean>;
	public findOneResponse$: Observable<Response<Post> | null>;

	// update
	public updateDto$: Observable<UpdatePostDto | null>;
	public updateId$: Observable<string | undefined>;
	public updateException$: Observable<Exception | null>;
	public updateIsLoading$: Observable<boolean>;
	public updateResponse$: Observable<Response<Post> | null>;

	constructor(private readonly store: Store<PostState>) {
		// create
		this.createDto$ = this.store.select(zSelector.getPostCreateDto);
		this.createException$ = this.store.select(zSelector.getPostCreateException);
		this.createIsLoading$ = this.store.select(zSelector.getPostCreateIsLoading);
		this.createResponse$ = this.store.select(zSelector.getPostCreateResponse);

		// findAll
		this.findAllPagination$ = this.store.select(zSelector.getPostFindAllPagination);
		this.findAllException$ = this.store.select(zSelector.getPostFindAllException);
		this.findAllIsLoading$ = this.store.select(zSelector.getPostFindAllIsLoading);
		this.findAllResponse$ = this.store.select(zSelector.getPostFindAllResponse);

		// findOne
		this.findOneId$ = this.store.select(zSelector.getPostFindOneId);
		this.findOneException$ = this.store.select(zSelector.getPostFindOneException);
		this.findOneIsLoading$ = this.store.select(zSelector.getPostFindOneIsLoading);
		this.findOneResponse$ = this.store.select(zSelector.getPostFindOneResponse);

		// update
		this.updateDto$ = this.store.select(zSelector.getPostUpdateDto);
		this.updateId$ = this.store.select(zSelector.getPostUpdateId);
		this.updateException$ = this.store.select(zSelector.getPostUpdateException);
		this.updateIsLoading$ = this.store.select(zSelector.getPostUpdateIsLoading);
		this.updateResponse$ = this.store.select(zSelector.getPostUpdateResponse);
	}

	create(createPostDto: CreatePostDto) {
		this.store.dispatch(POST_CREATE_REQUESTED({ payload: createPostDto }));
	}

	findAll(pagination: Pagination) {
		this.store.dispatch(POST_FIND_ALL_REQUESTED({ payload: pagination }));
	}

	findOne(id: string) {
		this.store.dispatch(POST_FIND_ONE_REQUESTED({ payload: id }));
	}

	update(id: string, updatePostDto: UpdatePostDto) {
		this.store.dispatch(
			POST_UPDATE_REQUESTED({
				id,
				payload: updatePostDto
			})
		);
	}
}
