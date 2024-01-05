import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, ZListModalidad, ZListSesiones, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Legislature, LegislatureAdapter } from '../../../../legislature/entities';
import { ZE_Patterns } from 'src/app/core/constants/patterns.enum';
import { FilesArchiveFacade } from '../../../facades/file-archive.facade';
import {
	CreateFilesArchiveDto,
	FilesArchiveAdapter,
	UpdateFilesArchiveDto
} from '../../../entities';

@Component({
	selector: 'z-File-Archive-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class FileArchiveCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public ZListsModalidad: any[] = ZListModalidad;
	public ZListsSesiones: any[] = ZListSesiones;
	public NewListsSesiones: any[] = [];
	public filteredOptions!: Observable<string>;
	public title: string = '';

	public legislatureFindAllResponse$: Observable<Response<LegislatureAdapter[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<FileArchiveCreateUpdateComponent>);
	constructor(
		private readonly filesArchiveFacade: FilesArchiveFacade,
		private readonly legislatureFacade: LegislatureFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<FilesArchiveAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear archivos'
				: 'Actualizar archivos';

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = filesArchiveFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			arch_code: new FormControl('', [Validators.required, Validators.maxLength(50)]),
			arch_name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
			legislatura: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			this.zForm.patchValue({ ...z });
		}
	}

	get arch_code() {
		return this.zForm.get('arch_code')!;
	}
	get arch_name() {
		return this.zForm.get('arch_name')!;
	}
	get legislatura(): FormControl<LegislatureAdapter> {
		return this.zForm.get('legislatura') as FormControl<LegislatureAdapter>;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	getDisplayLegislature(option: LegislatureAdapter): string {
		return option ? option.LegDescripcion : '';
	}

	private getCreateUpdateInput(): CreateFilesArchiveDto {
		return {
			arch_code: this.arch_code.value,
			arch_name: this.arch_name.value,
			IdcallLeg: this.legislatura.value.IdLegislatura,
			arch_File: this.paths[0]
		};
	}

	private create(): void {
		const createFilesArchiveDto: CreateFilesArchiveDto = this.getCreateUpdateInput();
		this.filesArchiveFacade.create(createFilesArchiveDto);
		this.closeDialog(this.filesArchiveFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateFilesArchiveDto: UpdateFilesArchiveDto = {
			...this.getCreateUpdateInput()
		};

		this.filesArchiveFacade.update(this.payloadDialog.z.arch_id, updateFilesArchiveDto);
		this.closeDialog(this.filesArchiveFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'call',
			maxSize: '2',
			acceptedExtensions: 'application/pdf',
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
