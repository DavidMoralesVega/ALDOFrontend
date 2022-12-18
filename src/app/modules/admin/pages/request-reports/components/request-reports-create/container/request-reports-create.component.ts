import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';
import { CreateRequestReportsDto } from '../../../entities';
import { PayloadFile } from 'src/app/core/entities';

@Component({
	selector: 'z-request-reports-create',
	templateUrl: './request-reports-create.component.html',
	styleUrls: ['./request-reports-create.component.scss']
})
export class RequestReportsCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly requestReportsFacade: RequestReportsFacade) {
		this.createIsLoading$ = requestReportsFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			reqR_num: new FormControl('', [Validators.required]),
			reqR_petitioner: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,100}')
			]),
			reqR_addressee: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z ]{1,100}')
			]),
			reqR_abstract: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z0-9 ]{1,}')
			]),
			reqR_Visibility: new FormControl('', [Validators.required]),
			reqR_management: new FormControl('', [Validators.required])
		});
	}

	get reqR_num() {
		return this.formCreate.get('reqR_num')!;
	}
	get reqR_petitioner() {
		return this.formCreate.get('reqR_petitioner')!;
	}
	get reqR_addressee() {
		return this.formCreate.get('reqR_addressee')!;
	}
	get reqR_abstract() {
		return this.formCreate.get('reqR_abstract')!;
	}
	get reqR_Visibility() {
		return this.formCreate.get('reqR_Visibility')!;
	}
	get reqR_management() {
		return this.formCreate.get('reqR_management')!;
	}

	create() {
		console.log(this.formCreate);

		if (this.formCreate.invalid) return;

		let createRequestReportsDto = new FormData();
		createRequestReportsDto.append('reqR_num', this.reqR_num.value);
		createRequestReportsDto.append('reqR_petitioner', this.reqR_petitioner.value);
		createRequestReportsDto.append('reqR_addressee', this.reqR_addressee.value);
		createRequestReportsDto.append('reqR_abstract', this.reqR_abstract.value);
		createRequestReportsDto.append('reqR_Visibility', this.reqR_Visibility.value);
		createRequestReportsDto.append('reqR_management', this.reqR_management.value);
		createRequestReportsDto.append('reqRFile', this.file);

		this.requestReportsFacade.create(createRequestReportsDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		// console.log(payloadFile);
	}
}
