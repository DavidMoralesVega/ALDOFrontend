import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';
import { Pagination, PayloadFile, Response } from 'src/app/core/entities';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Legislature } from '../../../../legislature/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-request-reports-create',
	templateUrl: './request-reports-create.component.html',
	styleUrls: ['./request-reports-create.component.scss']
})
export class RequestReportsCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	// variables imagen
	private file!: File;
	private fileVideo!: File;
	private isValidImage: boolean = false;

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};
	private readonly dialogRef = inject(MatDialogRef<RequestReportsCreateComponent>);

	constructor(
		private readonly requestReportsFacade: RequestReportsFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();

		this.createIsLoading$ = requestReportsFacade.createIsLoading$;
		this.legislatureFacade.findAll(this.pagination);
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			IdreqRLeg: new FormControl('', [Validators.required]),
			reqR_title: new FormControl('', [Validators.required]),
			reqR_abstract: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z0-9 ]{1,}')
			])
		});
	}

	get IdreqRLeg() {
		return this.formCreate.get('IdreqRLeg')!;
	}

	get reqR_title() {
		return this.formCreate.get('reqR_title')!;
	}
	get reqR_abstract() {
		return this.formCreate.get('reqR_abstract')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		console.log(this.IdreqRLeg.value);

		let createRequestReportsDto = new FormData();
		createRequestReportsDto.append('reqR_title', this.reqR_title.value);
		createRequestReportsDto.append('reqR_abstract', this.reqR_abstract.value);
		createRequestReportsDto.append('reqRFile', this.file);
		createRequestReportsDto.append('reqRVideo', this.fileVideo);
		createRequestReportsDto.append('IdreqRLeg', this.IdreqRLeg.value);

		this.requestReportsFacade.create(createRequestReportsDto);
		this.closeDialog(this.requestReportsFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagenx
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}

	// Obtener video
	handleUploadVideo(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.fileVideo = payloadFile.file;
	}
}
