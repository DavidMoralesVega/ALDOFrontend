import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { CategoryFacade } from '../../../facades/category.facade';
import { CategoryAdapter, UpdateCategoryDto } from '../../../entities/models/category.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-category-update',
	templateUrl: './category-update.component.html',
	styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;
	private readonly dialogRef = inject(MatDialogRef<CategoryUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA) private readonly categoryAdapter: CategoryAdapter,
		private readonly categoryFacade: CategoryFacade
	) {
		super();

		this.updateIsLoading$ = categoryFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			cat_nombre: new FormControl(this.categoryAdapter.cat_nombre, [
				Validators.required,
				Validators.maxLength(50),
				Validators.pattern('[a-zA-Z]{1,50}')
			])
		});
	}

	get cat_nombre() {
		return this.formUpdate.get('cat_nombre')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateCategoryDto: UpdateCategoryDto = {
			cat_nombre: this.cat_nombre.value
		};

		this.categoryFacade.update(this.categoryAdapter.cat_id, updateCategoryDto);
		this.closeDialog(this.categoryFacade.updateResponse$, this.dialogRef);
	}
}
