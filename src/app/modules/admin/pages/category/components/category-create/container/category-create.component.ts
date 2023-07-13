import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { CategoryFacade } from '../../../facades/category.facade';
import { CreateCategoryDto } from '../../../entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-category-create',
	templateUrl: './category-create.component.html',
	styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<CategoryCreateComponent>);

	constructor(private readonly categoryFacade: CategoryFacade) {
		super();
		this.createIsLoading$ = categoryFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			cat_nombre: new FormControl('', [
				Validators.required,
				Validators.maxLength(50),
				Validators.pattern('[a-zA-Z]{1,50}')
			])
		});
	}

	get cat_nombre() {
		return this.formCreate.get('cat_nombre')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		const createCategoryDto: CreateCategoryDto = {
			cat_nombre: this.cat_nombre.value
		};

		this.categoryFacade.create(createCategoryDto);
		this.closeDialog(this.categoryFacade.createResponse$, this.dialogRef);
	}
}
