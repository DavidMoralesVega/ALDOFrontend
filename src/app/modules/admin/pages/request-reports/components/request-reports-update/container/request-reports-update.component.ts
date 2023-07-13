import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { PayloadFile, Response, Pagination } from 'src/app/core/entities';
import { UpdateRequestReportsForeignAdapter } from '../../../entities/models/request-reports.model';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-request-reports-update',
	templateUrl: './request-reports-update.component.html',
	styleUrls: ['./request-reports-update.component.scss']
})
export class RequestReportsUpdateComponent extends ZBaseService {
	public formUpdate: FormGroup = new FormGroup({});
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public updateIsLoading$: Observable<boolean>;

	private file!: File;
	private fileVideo!: File;
	private isValidImage: boolean = false;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};
	private readonly dialogRef = inject(MatDialogRef<RequestReportsUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly UpdateRequestReportsForeignAdapter: UpdateRequestReportsForeignAdapter,
		private readonly requestReportsFacade: RequestReportsFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();

		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = requestReportsFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			reqR_title: new FormControl(this.UpdateRequestReportsForeignAdapter.reqR_title, [
				Validators.required
			]),
			reqR_abstract: new FormControl(this.UpdateRequestReportsForeignAdapter.reqR_abstract, [
				Validators.required
			]),
			IdreqRLeg: new FormControl(
				this.UpdateRequestReportsForeignAdapter.legislatura.IdLegislatura,
				[Validators.required]
			)
		});
	}

	get reqR_title() {
		return this.formUpdate.get('reqR_title')!;
	}
	get reqR_abstract() {
		return this.formUpdate.get('reqR_abstract')!;
	}
	get IdreqRLeg() {
		return this.formUpdate.get('IdreqRLeg')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		let updateRequestReportsDto = new FormData();
		updateRequestReportsDto.append('reqR_title', this.reqR_title.value);
		updateRequestReportsDto.append('reqR_abstract', this.reqR_abstract.value);
		updateRequestReportsDto.append('IdreqRLeg', this.IdreqRLeg.value);
		updateRequestReportsDto.append('reqRFile', this.file);
		updateRequestReportsDto.append('reqRVideo', this.fileVideo);

		this.requestReportsFacade.update(
			this.UpdateRequestReportsForeignAdapter.reqR_id,
			updateRequestReportsDto
		);
		this.closeDialog(this.requestReportsFacade.updateResponse$, this.dialogRef);
	}

	// Obtener imagen
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
