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
			reqR_title: new FormControl(this.RequestReportsAdapter.reqR_title, [Validators.required]),
			reqR_abstract: new FormControl(this.RequestReportsAdapter.reqR_abstract, [
				Validators.required
			])
		});
	}

	get reqR_title() {
		return this.formUpdate.get('reqR_title')!;
	}
	get reqR_abstract() {
		return this.formUpdate.get('reqR_abstract')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateRequestReportsDto: UpdateRequestReportsDto = {
			reqR_title: this.reqR_title.value,
			reqR_abstract: this.reqR_abstract.value
		};

		this.requestReportsFacade.update(this.RequestReportsAdapter.reqR_id, updateRequestReportsDto);
	}
}
