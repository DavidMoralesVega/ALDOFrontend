import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestWrittenAdapter, UpdateRequestWrittenDto } from '../../../entities';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';

@Component({
	selector: 'z-request-written-update',
	templateUrl: './request-written-update.component.html',
	styleUrls: ['./request-written-update.component.scss']
})
export class RequestWrittenUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly requestWrittenAdapter: RequestWrittenAdapter,
		private readonly requestWrittenFacade: RequestWrittenFacade
	) {
		this.updateIsLoading$ = requestWrittenFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			RWTitle: new FormControl(this.requestWrittenAdapter.RWTitle, [
				Validators.required,
				Validators.maxLength(40)
			]),
			RWSummary: new FormControl(this.requestWrittenAdapter.RWSummary, [
				Validators.required,
				Validators.maxLength(40)
			]),
			RWPublicationDate: new FormControl(this.requestWrittenAdapter.RWPublicationDate, [
				Validators.required
			]),
			RWIssueDate: new FormControl(this.requestWrittenAdapter.RWIssueDate, [
				Validators.required
			]),
			RWDocumentNumber: new FormControl(this.requestWrittenAdapter.RWDocumentNumber, [
				Validators.required
			]),
			RWVisibility: new FormControl(this.requestWrittenAdapter.RWVisibility, [
				Validators.required
			])
		});
	}
	get RWTitle() {
		return this.formUpdate.get('RWTitle')!;
	}
	get RWSummary() {
		return this.formUpdate.get('RWSummary')!;
	}
	get RWPublicationDate() {
		return this.formUpdate.get('RWPublicationDate')!;
	}
	get RWIssueDate() {
		return this.formUpdate.get('RWIssueDate')!;
	}
	get RWDocumentNumber() {
		return this.formUpdate.get('RWDocumentNumber')!;
	}
	get RWVisibility() {
		return this.formUpdate.get('RWVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updateRequestWrittenDto: UpdateRequestWrittenDto = {
			RWTitle: this.RWTitle.value,
			RWSummary: this.RWSummary.value,
			RWPublicationDate: this.RWPublicationDate.value,
			RWIssueDate: this.RWIssueDate.value,
			RWDocumentNumber: this.RWDocumentNumber.value,
			RWVisibility: this.RWVisibility.value
		};
		console.log(this.requestWrittenAdapter.IdRequestWritten);

		this.requestWrittenFacade.update(
			this.requestWrittenAdapter.IdRequestWritten,
			updateRequestWrittenDto
		);

		// this.matDialogRef.close();
	}
}
