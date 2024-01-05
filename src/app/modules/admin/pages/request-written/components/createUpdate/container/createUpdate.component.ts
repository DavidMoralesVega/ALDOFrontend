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
import { LegislatureAdapter } from '../../../../legislature/entities';
import { ZE_Patterns } from 'src/app/core/constants/patterns.enum';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';
import {
	CreateRequestWrittenDto,
	RequestWrittenAdapter,
	UpdateRequestWrittenDto
} from '../../../entities';

@Component({
	selector: 'z-Call-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class RequestWrittenCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

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
	private readonly dialogRef = inject(MatDialogRef<RequestWrittenCreateUpdateComponent>);
	constructor(
		private readonly requestWrittenFacade: RequestWrittenFacade,
		private readonly legislatureFacade: LegislatureFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<RequestWrittenAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear petición de informe escrito'
				: 'Actualizar petición de informe escrito';

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = requestWrittenFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			RWTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWPublicationDate: new FormControl('', [Validators.required]),
			RWIssueDate: new FormControl('', [Validators.required]),
			RWVisibility: new FormControl('Público', [Validators.required]),
			legislatura: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			this.zForm.patchValue({ ...z });
		}
	}

	get RWTitle() {
		return this.zForm.get('RWTitle')!;
	}
	get RWSummary() {
		return this.zForm.get('RWSummary')!;
	}
	get RWPublicationDate() {
		return this.zForm.get('RWPublicationDate')!;
	}
	get RWIssueDate() {
		return this.zForm.get('RWIssueDate')!;
	}
	get RWVisibility() {
		return this.zForm.get('RWVisibility')!;
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

	private getCreateUpdateInput(): CreateRequestWrittenDto {
		return {
			RWTitle: this.RWTitle.value,
			RWSummary: this.RWSummary.value,
			RWPublicationDate: this.RWPublicationDate.value,
			RWIssueDate: this.RWIssueDate.value,
			RWVisibility: this.RWVisibility.value,
			IdreqWrLeg: this.legislatura.value.IdLegislatura,
			RWFile: this.paths[0]
		};
	}

	private create(): void {
		const createRequestWrittenDto: CreateRequestWrittenDto = this.getCreateUpdateInput();
		this.requestWrittenFacade.create(createRequestWrittenDto);
		this.closeDialog(this.requestWrittenFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateRequestWrittenDto: UpdateRequestWrittenDto = {
			...this.getCreateUpdateInput()
		};

		this.requestWrittenFacade.update(
			this.payloadDialog.z.IdRequestWritten,
			updateRequestWrittenDto
		);
		this.closeDialog(this.requestWrittenFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'request-written',
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
