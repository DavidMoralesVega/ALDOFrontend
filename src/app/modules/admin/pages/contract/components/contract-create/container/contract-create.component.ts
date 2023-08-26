import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
	Pagination,
	PayloadFile,
	ZListContract,
	ZListContractAdministrativo
} from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ContractFacade } from '../../../facades/contract.facade';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-contract-create',
	templateUrl: './contract-create.component.html',
	styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent extends ZBaseService  {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListContract: any[] = [];

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<ContractCreateComponent>);
	constructor(

		private readonly contractFacade: ContractFacade,
		private readonly authFacade: AuthFacade
	) {
		super();
		console.log('%c Result<==============================>! ', 'color: red; font-size: 40px');
		this.authFacade.loginResponse$.subscribe((data) => (this.rolValue = data?.data.Roles));
		console.log('%c Result<==============================>! ', 'color: red; font-size: 40px');
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
		this.formCreate = new FormGroup({
			CTTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			CTSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			CTIssueDate: new FormControl('', [Validators.required]),
			CTDocumentNumber: new FormControl('', [Validators.required]),
			CTType: new FormControl('', [Validators.required])
		});
	}
	get CTTitle() {
		return this.formCreate.get('CTTitle')!;
	}
	get CTSummary() {
		return this.formCreate.get('CTSummary')!;
	}
	get CTIssueDate() {
		return this.formCreate.get('CTIssueDate')!;
	}
	get CTDocumentNumber() {
		return this.formCreate.get('CTDocumentNumber')!;
	}
	get CTType() {
		return this.formCreate.get('CTType')!;
	}
	create() {
		if (this.formCreate.invalid) return;

		// if (!this.isValidImage) return;

		let createResolutionDto = new FormData();
		createResolutionDto.append('CTTitle', this.CTTitle.value);
		createResolutionDto.append('CTSummary', this.CTSummary.value);
		createResolutionDto.append('CTIssueDate', this.CTIssueDate.value);
		createResolutionDto.append('CTDocumentNumber', this.CTDocumentNumber.value);
		createResolutionDto.append('CTType', this.CTType.value);
		createResolutionDto.append('CTVisibility', 'Privado');
		createResolutionDto.append('CTFile', this.file);

		this.contractFacade.create(createResolutionDto);
		this.closeDialog(this.contractFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
