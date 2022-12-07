import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import {
	RequestReportsAdapter,
	UpdateRequestReportsDto
} from '../../../entities/models/request-reports.model';
import { RequestReportsFacade } from '../../../facades/request-reports.facade';

@Component({
	selector: 'z-request-reports-update',
	templateUrl: './request-reports-update.component.html',
	styleUrls: ['./request-reports-update.component.scss']
})
export class RequestReportsUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;

	constructor(
		@Inject(MAT_DIALOG_DATA) private readonly RequestReportsAdapter: RequestReportsAdapter,
		private readonly requestReportsFacade: RequestReportsFacade
	) {
		this.updateIsLoading$ = requestReportsFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			reqR_num: new FormControl(this.RequestReportsAdapter.reqR_num, [Validators.required]),
			reqR_petitioner: new FormControl(this.RequestReportsAdapter.reqR_petitioner, [
				Validators.required
			]),
			reqR_addressee: new FormControl(this.RequestReportsAdapter.reqR_addressee, [
				Validators.required
			]),
			reqR_abstract: new FormControl(this.RequestReportsAdapter.reqR_abstract, [
				Validators.required
			]),
			reqR_Visibility: new FormControl(this.RequestReportsAdapter.reqR_Visibility, [
				Validators.required
			]),
			reqR_management: new FormControl(this.RequestReportsAdapter.reqR_management, [
				Validators.required
			])
		});
	}

	get reqR_num() {
		return this.formUpdate.get('reqR_num')!;
	}
	get reqR_petitioner() {
		return this.formUpdate.get('reqR_petitioner')!;
	}
	get reqR_addressee() {
		return this.formUpdate.get('reqR_addressee')!;
	}
	get reqR_abstract() {
		return this.formUpdate.get('reqR_abstract')!;
	}
	get reqR_Visibility() {
		return this.formUpdate.get('reqR_Visibility')!;
	}
	get reqR_management() {
		return this.formUpdate.get('reqR_management')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateRequestReportsDto: UpdateRequestReportsDto = {
			reqR_num: this.reqR_num.value,
			reqR_petitioner: this.reqR_petitioner.value,
			reqR_addressee: this.reqR_addressee.value,
			reqR_abstract: this.reqR_abstract.value,
			reqR_Visibility: this.reqR_Visibility.value,
			reqR_management: this.reqR_management.value.toString()
		};

		this.requestReportsFacade.update(this.RequestReportsAdapter.reqR_id, updateRequestReportsDto);

		// this.matDialogRef.close();
	}
}
