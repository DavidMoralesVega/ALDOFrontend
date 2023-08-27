import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';
import { Pagination, PayloadFile, Response } from 'src/app/core/entities';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Legislature } from '../../../../legislature/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { CreateRequestReportsDto } from '../../../entities';

@Component({
	selector: 'z-request-reports-create',
	templateUrl: './request-reports-create.component.html'
})
export class RequestReportsCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	// variables imagen
	public paths: any[] = [];
	public paths1: any[] = [];
	private file!: File;
	private fileVideo!: File;
	private isValidImage: boolean = false;
	private readonly matDialog = inject(MatDialog);
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

		if (this.formCreate.invalid) return;

		const createRequestReportsDto: CreateRequestReportsDto = {
			reqR_title: this.reqR_title.value,
			reqR_abstract: this.reqR_abstract.value,
			reqRFile: this.paths[0],
			reqRVideo: this.paths1[0],
			IdreqRLeg: this.IdreqRLeg.value
		};

		console.log({ createRequestReportsDto });

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

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'request-reports',
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
					console.log(files);
					this.paths = files.data.paths;
				}
			});
	}
	openFileMp4Upload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'request-reports',
			maxSize: '2',
			acceptedExtensions: 'application/mp4',
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
					console.log(files);
					this.paths1 = files.data.paths;
				}
			});
	}
}
