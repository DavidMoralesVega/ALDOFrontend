import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ZListContract, ZListContractAdministrativo } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { RecognitionFacade } from '../../../facades/recognition.facade';
import { CreateRecognitionDto, RecognitionAdapter, UpdateRecognitionDto } from '../../../entities';

@Component({
	selector: 'z-contract-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class RecognitionCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	title: string = '';

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<RecognitionCreateUpdateComponent>);
	constructor(
		private readonly recognitionFacade: RecognitionFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<RecognitionAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Reconocimientos'
				: 'Actualizar Reconocimientos';

		this.createIsLoading$ = recognitionFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			RTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RPublicationDate: new FormControl('', [Validators.required]),
			RIssueDate: new FormControl('', [Validators.required]),
			REventDate: new FormControl('', [Validators.required]),
			RVisibility: new FormControl('Público', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			const REventDate = new Date(z.REventDate);
			REventDate.setDate(REventDate.getDate() + 1);
			const RIssueDate = new Date(z.RIssueDate);
			RIssueDate.setDate(RIssueDate.getDate() + 1);
			const RPublicationDate = new Date(z.RPublicationDate);
			RPublicationDate.setDate(RPublicationDate.getDate() + 1);
			this.zForm.patchValue({ ...z, REventDate, RIssueDate, RPublicationDate });
		}
	}

	get RTitle() {
		return this.zForm.get('RTitle')!;
	}
	get RSummary() {
		return this.zForm.get('RSummary')!;
	}
	get RPublicationDate() {
		return this.zForm.get('RPublicationDate')!;
	}
	get RIssueDate() {
		return this.zForm.get('RIssueDate')!;
	}
	get REventDate() {
		return this.zForm.get('REventDate')!;
	}

	get RVisibility() {
		return this.zForm.get('RVisibility')!;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	private getCreateUpdateInput(): CreateRecognitionDto {
		return {
			RTitle: this.RTitle.value,
			RSummary: this.RSummary.value,
			RPublicationDate: this.RPublicationDate.value,
			RIssueDate: this.RIssueDate.value,
			REventDate: this.REventDate.value,
			RVisibility: this.RVisibility.value,
			RFile: this.paths[0]
		};
	}

	private create(): void {
		const createRecognitionDto: CreateRecognitionDto = this.getCreateUpdateInput();
		this.recognitionFacade.create(createRecognitionDto);
		this.closeDialog(this.recognitionFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateRecognitionDto: UpdateRecognitionDto = {
			...this.getCreateUpdateInput()
		};

		this.recognitionFacade.update(this.payloadDialog.z.IdRecognition, updateRecognitionDto);
		this.closeDialog(this.recognitionFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'Recognition',
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
