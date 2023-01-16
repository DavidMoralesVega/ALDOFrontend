import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination, ZListContract } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ContractAdapter, UpdateContractDto } from '../../../entities';
import { ContractFacade } from '../../../facades/contract.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';

@Component({
	selector: 'z-contract-update',
	templateUrl: './contract-update.component.html',
	styleUrls: ['./contract-update.component.scss']
})
export class ContractUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;
	public ZListContract: any[] = ZListContract;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly contractAdapter: ContractAdapter,
		private readonly contractFacade: ContractFacade
	) {
		this.updateIsLoading$ = contractFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			CTTitle: new FormControl(this.contractAdapter.CTTitle, [Validators.required]),
			CTSummary: new FormControl(this.contractAdapter.CTSummary, [Validators.required]),
			CTIssueDate: new FormControl(this.contractAdapter.CTIssueDate, [Validators.required]),
			CTDocumentNumber: new FormControl(this.contractAdapter.CTDocumentNumber, [
				Validators.required
			]),
			CTType: new FormControl(this.contractAdapter.CTType, [Validators.required])
		});
	}
	get CTTitle() {
		return this.formUpdate.get('CTTitle')!;
	}
	get CTSummary() {
		return this.formUpdate.get('CTSummary')!;
	}
	get CTPublicationDate() {
		return this.formUpdate.get('CTPublicationDate')!;
	}
	get CTIssueDate() {
		return this.formUpdate.get('CTIssueDate')!;
	}
	get CTDocumentNumber() {
		return this.formUpdate.get('CTDocumentNumber')!;
	}
	get CTType() {
		return this.formUpdate.get('CTType')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		/* const updateContractDto: UpdateContractDto = {
			CTTitle: this.CTTitle.value,
			CTSummary: this.CTSummary.value,
			CTIssueDate: this.CTIssueDate.value,
			CTDocumentNumber: this.CTDocumentNumber.value,
			CTType: this.CTType.value
		}; */

		let updateContractDto = new FormData();
		updateContractDto.append('CTTitle', this.CTTitle.value);
		updateContractDto.append('CTSummary', this.CTSummary.value);
		updateContractDto.append('CTIssueDate', this.CTIssueDate.value);
		updateContractDto.append('CTDocumentNumber', this.CTDocumentNumber.value);
		updateContractDto.append('CTType', this.CTType.value);
		updateContractDto.append('CTFile', this.file);

		this.contractFacade.update(this.contractAdapter.IdContract, updateContractDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
