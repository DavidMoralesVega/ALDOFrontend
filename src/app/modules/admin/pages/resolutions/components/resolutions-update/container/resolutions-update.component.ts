import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination, ZListResolutions } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ResolutionAdapter, UpdateResolutionDto } from '../../../entities';
import { ResolutionFacade } from '../../../facades/resolutions.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
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
	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

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

			REStartYear: new FormControl(this.resolutionAdapter.REStartYear, [Validators.required]),
			REEndYear: new FormControl(this.resolutionAdapter.REEndYear, [Validators.required]),
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

	get REStartYear() {
		return this.formUpdate.get('REStartYear')!;
	}
	get REEndYear() {
		return this.formUpdate.get('REEndYear')!;
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

		// if (!this.isValidImage) return;
		console.log('REVisibility', this.REVisibility.value);
		console.log('REFile', this.file);

		let updateResolutionDto = new FormData();
		updateResolutionDto.append('RETitle', this.RETitle.value);
		updateResolutionDto.append('RESummary', this.RESummary.value);
		updateResolutionDto.append('REPublicationDate', this.REPublicationDate.value);
		updateResolutionDto.append('REIssueDate', this.REIssueDate.value);
		updateResolutionDto.append('REDocumentNumber', this.REDocumentNumber.value);
		updateResolutionDto.append('REStartYear', this.REStartYear.value);
		updateResolutionDto.append('REEndYear', this.REEndYear.value);
		updateResolutionDto.append('REType', this.REType.value);
		updateResolutionDto.append('REVisibility', this.REVisibility.value);
		updateResolutionDto.append('REFile', this.file);

		console.log(updateResolutionDto);
		this.resolutionFacade.update(this.resolutionAdapter.IdResolution, updateResolutionDto);
	}
	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
