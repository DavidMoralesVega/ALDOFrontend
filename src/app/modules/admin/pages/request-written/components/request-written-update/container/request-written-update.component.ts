import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { RequestWrittenForeignAdapter } from '../../../entities';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { Response } from 'src/app/core/entities';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-request-written-update',
	templateUrl: './request-written-update.component.html'
})
export class RequestWrittenUpdateComponent extends ZBaseService {
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
	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<RequestWrittenUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly requestWrittenAdapter: RequestWrittenForeignAdapter,
		private readonly requestWrittenFacade: RequestWrittenFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();

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
			IdreqWrLeg: new FormControl(this.requestWrittenAdapter.legislatura.IdLegislatura, [
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

		let updateRequestWrittenDto = new FormData();
		updateRequestWrittenDto.append('RWTitle', this.RWTitle.value);
		updateRequestWrittenDto.append('RWSummary', this.RWSummary.value);
		updateRequestWrittenDto.append('RWPublicationDate', this.RWPublicationDate.value);
		updateRequestWrittenDto.append('RWIssueDate', this.RWIssueDate.value);
		updateRequestWrittenDto.append('RWVisibility', this.RWVisibility.value);
		updateRequestWrittenDto.append('RWFile', this.file);
		updateRequestWrittenDto.append('IdreqWrLeg', this.IdreqWrLeg.value);

		this.requestWrittenFacade.update(
			this.requestWrittenAdapter.IdRequestWritten,
			updateRequestWrittenDto
		);
		this.closeDialog(this.requestWrittenFacade.updateResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
