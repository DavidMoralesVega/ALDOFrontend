import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Category } from '../../../../category/entities/';
import { CategoryFacade } from '../../../../category/facades/category.facade';
import { CreatePostDto } from '../../../entities';
import { PostFacade } from '../../../facades/post.facade';

@Component({
	selector: 'z-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});

	public createIsLoading$: Observable<boolean>;

	public categoryFindAllResponse$: Observable<Response<Category[]> | null>;
	public categoryFindAllIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	constructor(
		private readonly postFacade: PostFacade,
		private readonly categoryFacade: CategoryFacade
	) {
		this.categoryFacade.findAll(this.pagination);

		this.categoryFindAllIsLoading$ = this.categoryFacade.findAllIsLoading$;
		this.categoryFindAllResponse$ = this.categoryFacade.findAllResponse$;

		this.createIsLoading$ = postFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.formCreate = new FormGroup({
			post_author: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,50}')
			]),
			post_content: new FormControl('', [Validators.required]),
			post_tittle: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,100}')
			]),
			cat_post_id: new FormControl('', [Validators.required])
		});
	}
	get post_author() {
		return this.formCreate.get('post_author')!;
	}
	get post_content() {
		return this.formCreate.get('post_content')!;
	}
	get post_tittle() {
		return this.formCreate.get('post_tittle')!;
	}

	get cat_post_id() {
		return this.formCreate.get('cat_post_id')!;
	}
	create() {
		if (this.formCreate.invalid) return;

		const createPostDto: CreatePostDto = {
			post_author: this.post_author.value,
			post_content: this.post_content.value,
			post_tittle: this.post_tittle.value,
			cat_post_id: this.cat_post_id.value
		};
		// console.log(createAdmDepartamentoDto);

		this.postFacade.create(createPostDto);

		// this.matDialogRef.close();
	}
}
