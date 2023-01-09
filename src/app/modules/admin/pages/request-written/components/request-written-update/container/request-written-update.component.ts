import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import {
	RequestWrittenAdapter,
	RequestWrittenForeignAdapter,
	UpdateRequestWrittenDto
} from '../../../entities';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { Response } from 'src/app/core/entities';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';

@Component({
	selector: 'z-request-written-update',
	templateUrl: './request-written-update.component.html',
	styleUrls: ['./request-written-update.component.scss']
})
export class RequestWrittenUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};
	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly requestWrittenAdapter: RequestWrittenForeignAdapter,
		private readonly requestWrittenFacade: RequestWrittenFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = requestWrittenFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
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
			RWVisibility: new FormControl(this.requestWrittenAdapter.RWVisibility, [
				Validators.required
			]),
			IdreqWrLeg: new FormControl(this.requestWrittenAdapter.legislature.IdLegislatura, [
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
	get RWVisibility() {
		return this.formUpdate.get('RWVisibility')!;
	}
	get IdreqWrLeg() {
		return this.formUpdate.get('IdreqWrLeg')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateRequestWrittenDto: UpdateRequestWrittenDto = {
			RWTitle: this.RWTitle.value,
			RWSummary: this.RWSummary.value,
			RWPublicationDate: this.RWPublicationDate.value,
			RWIssueDate: this.RWIssueDate.value,
			RWVisibility: this.RWVisibility.value,
			IdreqWrLeg: this.IdreqWrLeg.value
		};

		this.requestWrittenFacade.update(
			this.requestWrittenAdapter.IdRequestWritten,
			updateRequestWrittenDto
		);
	}
}
