import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, PayloadFile, ZListContract } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ContractFacade } from '../../../facades/contract.facade';

@Component({
	selector: 'z-contract-create',
	templateUrl: './contract-create.component.html',
	styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListContract: any[] = ZListContract;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly contractFacade: ContractFacade) {
		this.createIsLoading$ = contractFacade.createIsLoading$;
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
		console.log('hola antes form');

		if (this.formCreate.invalid) return;

		// if (!this.isValidImage) return;
		console.log('CTFile', this.file);

		let createResolutionDto = new FormData();
		createResolutionDto.append('CTTitle', this.CTTitle.value);
		createResolutionDto.append('CTSummary', this.CTSummary.value);
		createResolutionDto.append('CTIssueDate', this.CTIssueDate.value);
		createResolutionDto.append('CTDocumentNumber', this.CTDocumentNumber.value);
		createResolutionDto.append('CTType', this.CTType.value);
		createResolutionDto.append('CTVisibility', 'Privado');
		createResolutionDto.append('CTFile', this.file);

		console.log(createResolutionDto);

		this.contractFacade.create(createResolutionDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
