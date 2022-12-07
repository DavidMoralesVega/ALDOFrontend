import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination, ZListResolutions } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ResolutionAdapter, UpdateResolutionDto } from '../../../entities';
import { ResolutionFacade } from '../../../facades/resolutions.facade';

@Component({
	selector: 'z-resolutions-update',
	templateUrl: './resolutions-update.component.html',
	styleUrls: ['./resolutions-update.component.scss']
})
export class ResolutionsUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;
	public ZListResolutions: any[] = ZListResolutions;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly resolutionAdapter: ResolutionAdapter,
		private readonly resolutionFacade: ResolutionFacade
	) {
		this.updateIsLoading$ = resolutionFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			RETitle: new FormControl(this.resolutionAdapter.RETitle, [
				Validators.required,
				Validators.maxLength(40)
			]),
			RESummary: new FormControl(this.resolutionAdapter.RESummary, [
				Validators.required,
				Validators.maxLength(40)
			]),
			REPublicationDate: new FormControl(this.resolutionAdapter.REPublicationDate, [
				Validators.required
			]),
			REIssueDate: new FormControl(this.resolutionAdapter.REIssueDate, [Validators.required]),
			REDocumentNumber: new FormControl(this.resolutionAdapter.REDocumentNumber, [
				Validators.required
			]),

			REType: new FormControl(this.resolutionAdapter.REType, [Validators.required]),

			REVisibility: new FormControl(this.resolutionAdapter.REVisibility, [Validators.required])
		});
	}
	get RETitle() {
		return this.formUpdate.get('RETitle')!;
	}
	get RESummary() {
		return this.formUpdate.get('RESummary')!;
	}
	get REPublicationDate() {
		return this.formUpdate.get('REPublicationDate')!;
	}
	get REIssueDate() {
		return this.formUpdate.get('REIssueDate')!;
	}
	get REDocumentNumber() {
		return this.formUpdate.get('REDocumentNumber')!;
	}
	get REType() {
		return this.formUpdate.get('REType')!;
	}
	get REVisibility() {
		return this.formUpdate.get('REVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updateResolutionDto: UpdateResolutionDto = {
			RETitle: this.RETitle.value,
			RESummary: this.RESummary.value,
			REPublicationDate: this.REPublicationDate.value,
			REIssueDate: this.REIssueDate.value,
			REDocumentNumber: this.REDocumentNumber.value,
			REType: this.REType.value,
			REVisibility: this.REVisibility.value
		};
		console.log(this.resolutionAdapter.IdResolution);

		this.resolutionFacade.update(this.resolutionAdapter.IdResolution, updateResolutionDto);

		// this.matDialogRef.close();
	}
}
