import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayloadFile, ZListCategorys, Response, Pagination } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Procceding, ProccedingForeignAdapter } from '../../../entities';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProccedingFacade } from '../../../facades/procceding.facade';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-procceding-update',
	templateUrl: './procceding-update.component.html',
	styleUrls: ['./procceding-update.component.scss']
})
export class ProccedingUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;
	public ZListCategorys: any[] = ZListCategorys;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<ProccedingUpdateComponent>);
	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly proccedingAdapter: ProccedingForeignAdapter,
		private readonly proccedingFacade: ProccedingFacade
	) {
		super();
		this.updateIsLoading$ = proccedingFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			ac_category: new FormControl(this.proccedingAdapter.ac_category, [Validators.required])
		});
	}
	get ac_category() {
		return this.formUpdate.get('ac_category')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		let updateContractDto = new FormData();

		updateContractDto.append('ac_category', this.ac_category.value);
		updateContractDto.append('ac_File', this.file);
		this.proccedingFacade.update(this.proccedingAdapter.ac_id, updateContractDto);
		this.closeDialog(this.proccedingFacade.updateResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
