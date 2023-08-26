import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { Post, PostForeignAdapter, UpdatePostDto } from '../../../entities';
import { Pagination, Response } from 'src/app/core/entities';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostFacade } from '../../../facades/post.facade';
import { CategoryFacade } from '../../../../category/facades/category.facade';
import { Category } from '../../../../category/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';

@Component({
	selector: 'z-post-update',
	templateUrl: './post-update.component.html',
	styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;
	public paths: any[] = [];
	public categoryFindAllResponse$: Observable<Response<Category[]> | null>;
	public categoryFindAllIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	private readonly dialogRef = inject(MatDialogRef<PostUpdateComponent>);
	private readonly matDialog = inject(MatDialog);
	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly postForeignAdapter: PostForeignAdapter,
		private readonly postFacade: PostFacade,
		private readonly categoryFacade: CategoryFacade
	) {
		super();

		this.updateIsLoading$ = postFacade.updateIsLoading$;
		this.categoryFacade.findAll(this.pagination);
		this.categoryFindAllIsLoading$ = this.categoryFacade.findAllIsLoading$;
		this.categoryFindAllResponse$ = this.categoryFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			post_author: new FormControl(this.postForeignAdapter.post_author, [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,50}')
			]),
			post_content: new FormControl(this.postForeignAdapter.post_content, [Validators.required]),
			post_tittle: new FormControl(this.postForeignAdapter.post_tittle, [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,100}')
			]),
			cat_post_id: new FormControl(this.postForeignAdapter.category.cat_id, [
				Validators.required
			])
		});
	}

	get post_author() {
		return this.formUpdate.get('post_author')!;
	}
	get post_content() {
		return this.formUpdate.get('post_content')!;
	}
	get post_tittle() {
		return this.formUpdate.get('post_tittle')!;
	}
	get cat_post_id() {
		return this.formUpdate.get('cat_post_id')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updatePostDto: UpdatePostDto = {
			post_author: this.post_author.value,
			post_content: this.post_content.value,
			post_tittle: this.post_tittle.value,
			cat_post_id: this.cat_post_id.value,
			post_fotografia: this.paths[0]
		};

		this.postFacade.update(this.postForeignAdapter.post_id, updatePostDto);
		this.closeDialog(this.postFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'post',
			maxSize: '2',
			acceptedExtensions: 'application/img',
			multiple: false
		};
		this.matDialog
			.open(FileUploadComponent, {
				width: '840px',
				height: '756px',
				data: createFileUploadDto
			})
			.afterClosed()
			.subscribe({
				next: (files: any) => {
					this.paths = files.data.paths;
				}
			});
	}
}
