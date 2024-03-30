import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ZListContract, ZListContractAdministrativo } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ContractFacade } from '../../../facades/contract.facade';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ContractAdapter, CreateContractDto, UpdateContractDto } from '../../../entities';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';

@Component({
	selector: 'z-contract-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class ContractCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListContract: any[] = [];
	title: string = '';

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<ContractCreateUpdateComponent>);
	constructor(
		private readonly contractFacade: ContractFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<ContractAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Contrato'
				: 'Actualizar Contrato';

		this.createIsLoading$ = contractFacade.createIsLoading$;

		if (this.rolValue !== 'juridicos_administrativos') {
			this.ZListContract = ZListContract;
		} else {
			this.ZListContract = ZListContractAdministrativo;
		}
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			CTTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			CTSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			CTIssueDate: new FormControl('', [Validators.required]),
			CTDocumentNumber: new FormControl('', [Validators.required]),
			CTType: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			const date = new Date(z.CTIssueDate);
			date.setDate(date.getDate() + 1);
			this.zForm.patchValue({ ...z, CTIssueDate: date });
		}
	}
	get CTTitle() {
		return this.zForm.get('CTTitle')!;
	}
	get CTSummary() {
		return this.zForm.get('CTSummary')!;
	}
	get CTIssueDate() {
		return this.zForm.get('CTIssueDate')!;
	}
	get CTDocumentNumber() {
		return this.zForm.get('CTDocumentNumber')!;
	}
	get CTType() {
		return this.zForm.get('CTType')!;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	private getCreateUpdateInput(): CreateContractDto {
		return {
			CTTitle: this.CTTitle.value,
			CTSummary: this.CTSummary.value,
			CTIssueDate: this.CTIssueDate.value,
			CTDocumentNumber: this.CTDocumentNumber.value,
			CTType: this.CTType.value,
			CTVisibility: 'Privado',
			CTFile: this.paths[0]
		};
	}

	private create(): void {
		const createContractDto: CreateContractDto = this.getCreateUpdateInput();
		this.contractFacade.create(createContractDto);
		this.closeDialog(this.contractFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateContractDto: UpdateContractDto = {
			...this.getCreateUpdateInput()
		};

		this.contractFacade.update(this.payloadDialog.z.IdContract, updateContractDto);
		this.closeDialog(this.contractFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'contract',
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
