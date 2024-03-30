import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, Response, ZListResolutions } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { LegislatureAdapter } from '../../../../legislature/entities';
import { ResolutionFacade } from '../../../facades/resolutions.facade';
import { CreateResolutionDto, ResolutionAdapter, UpdateResolutionDto } from '../../../entities';

@Component({
	selector: 'z-Resolutions-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class ResolutionsCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public filteredOptions!: Observable<string>;
	public title: string = '';
	public ZListResolutions: any[] = ZListResolutions;

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
	private readonly dialogRef = inject(MatDialogRef<ResolutionsCreateUpdateComponent>);
	constructor(
		private readonly resolutionFacade: ResolutionFacade,
		private readonly legislatureFacade: LegislatureFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<ResolutionAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Resoluciones'
				: 'Actualizar Resoluciones';

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = resolutionFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			RETitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RESummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			REPublicationDate: new FormControl('', [Validators.required]),
			REIssueDate: new FormControl('', [Validators.required]),
			REDocumentNumber: new FormControl('', [Validators.required]),
			REType: new FormControl('', [Validators.required]),
			REVisibility: new FormControl('Privado', [Validators.required]),
			legislatura: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			const REIssueDate = new Date(z.REIssueDate);
			REIssueDate.setDate(REIssueDate.getDate() + 1);
			const REPublicationDate = new Date(z.REPublicationDate);
			REPublicationDate.setDate(REPublicationDate.getDate() + 1);
			this.zForm.patchValue({ ...z, REIssueDate, REPublicationDate });
		}
	}

	get RETitle() {
		return this.zForm.get('RETitle')!;
	}
	get RESummary() {
		return this.zForm.get('RESummary')!;
	}
	get REPublicationDate() {
		return this.zForm.get('REPublicationDate')!;
	}
	get REIssueDate() {
		return this.zForm.get('REIssueDate')!;
	}
	get REDocumentNumber() {
		return this.zForm.get('REDocumentNumber')!;
	}

	get REType() {
		return this.zForm.get('REType')!;
	}
	get REVisibility() {
		return this.zForm.get('REVisibility')!;
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

	private getCreateUpdateInput(): CreateResolutionDto {
		return {
			RETitle: this.RETitle.value,
			RESummary: this.RESummary.value,
			REPublicationDate: this.REPublicationDate.value,
			REIssueDate: this.REIssueDate.value,
			REDocumentNumber: this.REDocumentNumber.value,
			REType: this.REType.value,
			REVisibility: this.REVisibility.value,
			IdcallLeg: this.legislatura.value.IdLegislatura,
			REFile: this.paths[0]
		};
	}

	private create(): void {
		const createResolutionDto: CreateResolutionDto = this.getCreateUpdateInput();
		this.resolutionFacade.create(createResolutionDto);
		this.closeDialog(this.resolutionFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateResolutionDto: UpdateResolutionDto = {
			...this.getCreateUpdateInput()
		};

		this.resolutionFacade.update(this.payloadDialog.z.IdResolution, updateResolutionDto);
		this.closeDialog(this.resolutionFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'resolution',
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
