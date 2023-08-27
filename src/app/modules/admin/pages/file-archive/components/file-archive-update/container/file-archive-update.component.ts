import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZBaseService } from 'src/app/core/services/base.service';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { Pagination, PayloadFile, Response } from 'src/app/core/entities';
import { Legislature } from '../../../../legislature/entities';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilesArchiveForeignAdapter } from '../../../entities';
import { FilesArchiveFacade } from '../../../facades/file-archive.facade';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
@Component({
	selector: 'z-file-archive-update',
	templateUrl: './file-archive-update.component.html'
})
export class FileArchiveUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<FileArchiveUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly filesArchiveAdapter: FilesArchiveForeignAdapter,
		private readonly filesArchiveFacade: FilesArchiveFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();
		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = filesArchiveFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			arch_code: new FormControl(this.filesArchiveAdapter.arch_code, [
				Validators.required,
				Validators.maxLength(50)
			]),
			arch_name: new FormControl(this.filesArchiveAdapter.arch_name, [
				Validators.required,
				Validators.maxLength(40)
			]),

			IdresolLeg: new FormControl(this.filesArchiveAdapter.legislatura.IdLegislatura, [
				Validators.required
			])
		});
	}
	get arch_code() {
		return this.formUpdate.get('arch_code')!;
	}
	get arch_name() {
		return this.formUpdate.get('arch_name')!;
	}
	get IdresolLeg() {
		return this.formUpdate.get('IdresolLeg')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		let updateResolutionDto = new FormData();
		updateResolutionDto.append('arch_code', this.arch_code.value);
		updateResolutionDto.append('arch_name', this.arch_name.value);
		updateResolutionDto.append('arch_File', this.file);
		updateResolutionDto.append('IdresolLeg', this.IdresolLeg.value);

		this.filesArchiveFacade.update(this.filesArchiveAdapter.arch_id, updateResolutionDto);
		this.closeDialog(this.filesArchiveFacade.updateResponse$, this.dialogRef);
	}
	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
