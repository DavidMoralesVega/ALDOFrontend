import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Category } from '../../../../category/entities/';
import { CategoryFacade } from '../../../../category/facades/category.facade';
import { PostFacade } from '../../../facades/post.facade';
import { PayloadFile } from 'src/app/core/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent extends ZBaseService {
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

	private post_fotografia!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<PostCreateComponent>);

	constructor(
		private readonly postFacade: PostFacade,
		private readonly categoryFacade: CategoryFacade
	) {
		super();
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
			post_author: new FormControl('', [Validators.required]),
			post_content: new FormControl('', [Validators.required]),
			post_tittle: new FormControl('', [Validators.required]),
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

		const createPostDto = new FormData();
		createPostDto.append('post_author', this.post_author.value);
		createPostDto.append('post_content', this.post_content.value);
		createPostDto.append('post_tittle', this.post_tittle.value);
		createPostDto.append('cat_post_id', this.cat_post_id.value);
		createPostDto.append('post_fotografia', this.post_fotografia);

		this.postFacade.create(createPostDto);
		this.closeDialog(this.postFacade.createResponse$, this.dialogRef);
	}

	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.post_fotografia = payloadFile.file;
	}
}
