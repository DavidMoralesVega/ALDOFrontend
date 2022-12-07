import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, PayloadFile } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';

@Component({
	selector: 'z-request-written-create',
	templateUrl: './request-written-create.component.html',
	styleUrls: ['./request-written-create.component.scss']
})
export class RequestWrittenCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	//public ZListResolutions: any[] = ZListResolutions;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly requestWrittenFacade: RequestWrittenFacade) {
		this.createIsLoading$ = requestWrittenFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			RWTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWPublicationDate: new FormControl('', [Validators.required]),
			RWIssueDate: new FormControl('', [Validators.required]),
			RWDocumentNumber: new FormControl('', [Validators.required]),
			RWVisibility: new FormControl(true, [Validators.required])
		});
	}
	get RWTitle() {
		return this.formCreate.get('RWTitle')!;
	}
	get RWSummary() {
		return this.formCreate.get('RWSummary')!;
	}
	get RWPublicationDate() {
		return this.formCreate.get('RWPublicationDate')!;
	}
	get RWIssueDate() {
		return this.formCreate.get('RWIssueDate')!;
	}
	get RWDocumentNumber() {
		return this.formCreate.get('RWDocumentNumber')!;
	}

	get RWVisibility() {
		return this.formCreate.get('RWVisibility')!;
	}

	create() {
		console.log('hola antes form');

		if (this.formCreate.invalid) return;

		// if (!this.isValidImage) return;
		console.log('RWVisibility', this.RWVisibility.value);
		console.log('RWFile', this.file);

		let createResolutionDto = new FormData();
		createResolutionDto.append('RWTitle', this.RWTitle.value);
		createResolutionDto.append('RWSummary', this.RWSummary.value);
		createResolutionDto.append('RWPublicationDate', this.RWPublicationDate.value);
		createResolutionDto.append('RWIssueDate', this.RWIssueDate.value);
		createResolutionDto.append('RWDocumentNumber', this.RWDocumentNumber.value);

		createResolutionDto.append('RWVisibility', this.RWVisibility.value);
		createResolutionDto.append('RWFile', this.file);

		console.log(createResolutionDto);

		this.requestWrittenFacade.create(createResolutionDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
