import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Category, CategoryAdapter } from '../../../../category/entities/';
import { CategoryFacade } from '../../../../category/facades/category.facade';
import { PostFacade } from '../../../facades/post.facade';
import { PayloadFile } from 'src/app/core/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { CreatePostDto } from '../../../entities';

@Component({
	selector: 'z-post-create',
	templateUrl: './post-create.component.html'
})
export class PostCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});

	public createIsLoading$: Observable<boolean>;
	public paths: any[] = [];
	public categoryFindAllResponse$: Observable<Response<CategoryAdapter[]> | null>;
	public categoryFindAllIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	private readonly matDialog = inject(MatDialog);
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

		this.categoryFacade.findAllResponse$.subscribe((itemL: any) => {
			if (itemL && itemL.data) {
				const filteredData = itemL.data.filter((item: CategoryAdapter) => item.cat_estado);
				const response: Response<CategoryAdapter[]> = {
					isArray: itemL.isArray,
					path: itemL.path,
					duration: itemL.duration,
					method: itemL.method,
					data: filteredData
				};

				this.categoryFindAllResponse$ = from([response]);
			} else {
				this.categoryFindAllResponse$ = of(null);
			}
		});
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

		const createPostDto: CreatePostDto = {
			post_author: this.post_author.value,
			post_content: this.post_content.value,
			post_tittle: this.post_tittle.value,
			cat_post_id: this.cat_post_id.value,
			post_fotografia: this.paths[0]
		};

		this.postFacade.create(createPostDto);
		this.closeDialog(this.postFacade.createResponse$, this.dialogRef);
	}

	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.post_fotografia = payloadFile.file;
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
