import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pagination, ZListResolutions, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ResolutionFacade } from '../../../facades/resolutions.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
import { ResolutionForeignAdapter } from '../../../entities/models/resolutions.model';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
@Component({
	selector: 'z-resolutions-update',
	templateUrl: './resolutions-update.component.html',
	styleUrls: ['./resolutions-update.component.scss']
})
export class ResolutionsUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
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
		private readonly resolutionAdapter: ResolutionForeignAdapter,
		private readonly resolutionFacade: ResolutionFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = resolutionFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
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
			REVisibility: new FormControl(this.resolutionAdapter.REVisibility, [Validators.required]),
			IdresolLeg: new FormControl(this.resolutionAdapter.legislatura.IdLegislatura, [
				Validators.required
			])
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
	get IdresolLeg() {
		return this.formUpdate.get('IdresolLeg')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		let updateResolutionDto = new FormData();
		updateResolutionDto.append('RETitle', this.RETitle.value);
		updateResolutionDto.append('RESummary', this.RESummary.value);
		updateResolutionDto.append('REPublicationDate', this.REPublicationDate.value);
		updateResolutionDto.append('REIssueDate', this.REIssueDate.value);
		updateResolutionDto.append('REDocumentNumber', this.REDocumentNumber.value);
		updateResolutionDto.append('REType', this.REType.value);
		updateResolutionDto.append('REVisibility', this.REVisibility.value);
		updateResolutionDto.append('REFile', this.file);
		updateResolutionDto.append('IdresolLeg', this.IdresolLeg.value);

		this.resolutionFacade.update(this.resolutionAdapter.IdResolution, updateResolutionDto);
	}
	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
