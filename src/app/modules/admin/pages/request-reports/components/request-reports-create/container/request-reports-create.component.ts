import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';
import { CreateRequestReportsDto } from '../../../entities';

@Component({
	selector: 'z-request-reports-create',
	templateUrl: './request-reports-create.component.html',
	styleUrls: ['./request-reports-create.component.scss']
})
export class RequestReportsCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});

	public createIsLoading$: Observable<boolean>;

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
			reqR_listPdf: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z0-9 ]{1,}')
			]),
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
	get reqR_listPdf() {
		return this.formCreate.get('reqR_listPdf')!;
	}
	get reqR_management() {
		return this.formCreate.get('reqR_management')!;
	}

	create() {
		console.log(this.formCreate);

		if (this.formCreate.invalid) return;

		const createRequestReportsDto: CreateRequestReportsDto = {
			reqR_num: this.reqR_num.value,
			reqR_petitioner: this.reqR_petitioner.value,
			reqR_addressee: this.reqR_addressee.value,
			reqR_abstract: this.reqR_abstract.value,
			reqR_listPdf: this.reqR_listPdf.value,
			reqR_management: this.reqR_management.value
		};

		this.requestReportsFacade.create(createRequestReportsDto);
	}
}
