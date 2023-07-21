import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PayloadFile, Response, Pagination } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Legislature } from '../../../../legislature/entities';
import { MatDialogRef } from '@angular/material/dialog';
import { FilesArchiveFacade } from '../../../facades/file-archive.facade';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { ZBaseService } from 'src/app/core/services/base.service';
@Component({
	selector: 'z-file-archive-create',
	templateUrl: './file-archive-create.component.html',
	styles: []
})
export class FileArchiveCreateComponent extends ZBaseService {
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<FileArchiveCreateComponent>);

	constructor(
		private readonly filesArchiveFacade: FilesArchiveFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = filesArchiveFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.formCreate = new FormGroup({
			arch_code: new FormControl('', [Validators.required, Validators.maxLength(50)]),
			arch_name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
			IdresolLeg: new FormControl([Validators.required])
		});
	}
	get arch_code() {
		return this.formCreate.get('arch_code')!;
	}
	get arch_name() {
		return this.formCreate.get('arch_name')!;
	}
	get IdresolLeg() {
		return this.formCreate.get('IdresolLeg')!;
	}
	create() {
		if (this.formCreate.invalid) return;

		let createFilesArchiveDto = new FormData();
		createFilesArchiveDto.append('arch_code', this.arch_code.value);
		createFilesArchiveDto.append('arch_name', this.arch_name.value);
		createFilesArchiveDto.append('arch_File', this.file);
		createFilesArchiveDto.append('IdresolLeg', this.IdresolLeg.value);

		this.filesArchiveFacade.create(createFilesArchiveDto);
		this.closeDialog(this.filesArchiveFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
