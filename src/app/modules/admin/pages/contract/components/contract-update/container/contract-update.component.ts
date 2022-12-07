import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination, ZListContract } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ContractAdapter, UpdateContractDto } from '../../../entities';
import { ContractFacade } from '../../../facades/contract.facade';

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
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

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
			CTTitle: new FormControl(this.contractAdapter.CTTitle, [
				Validators.required,
				Validators.maxLength(40)
			]),
			CTSummary: new FormControl(this.contractAdapter.CTSummary, [
				Validators.required,
				Validators.maxLength(40)
			]),
			CTPublicationDate: new FormControl(this.contractAdapter.CTPublicationDate, [
				Validators.required
			]),
			CTIssueDate: new FormControl(this.contractAdapter.CTIssueDate, [Validators.required]),
			CTDocumentNumber: new FormControl(this.contractAdapter.CTDocumentNumber, [
				Validators.required
			]),

			CTType: new FormControl(this.contractAdapter.CTType, [Validators.required]),

			CTVisibility: new FormControl(this.contractAdapter.CTVisibility, [Validators.required])
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
	get CTVisibility() {
		return this.formUpdate.get('CTVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updateContractDto: UpdateContractDto = {
			CTTitle: this.CTTitle.value,
			CTSummary: this.CTSummary.value,
			CTPublicationDate: this.CTPublicationDate.value,
			CTIssueDate: this.CTIssueDate.value,
			CTDocumentNumber: this.CTDocumentNumber.value,
			CTType: this.CTType.value,
			CTVisibility: this.CTVisibility.value
		};
		console.log(this.contractAdapter.IdContract);

		this.contractFacade.update(this.contractAdapter.IdContract, updateContractDto);

		// this.matDialogRef.close();
	}
}
