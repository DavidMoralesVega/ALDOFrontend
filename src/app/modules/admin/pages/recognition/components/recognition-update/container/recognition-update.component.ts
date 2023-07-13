import { Component, OnInit, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/entities';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecognitionAdapter, UpdateRecognitionDto } from '../../../entities';
import { RecognitionFacade } from '../../../facades/recognition.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
import { ZBaseService } from 'src/app/core/services/base.service';
@Component({
	selector: 'z-recognition-update',
	templateUrl: './recognition-update.component.html',
	styleUrls: ['./recognition-update.component.scss']
})
export class RecognitionUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;

	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<RecognitionUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly recognitionAdapter: RecognitionAdapter,
		private readonly recognitionFacade: RecognitionFacade
	) {
		super();
		this.updateIsLoading$ = recognitionFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			RTitle: new FormControl(this.recognitionAdapter.RTitle, [
				Validators.required,
				Validators.maxLength(40)
			]),
			RSummary: new FormControl(this.recognitionAdapter.RSummary, [
				Validators.required,
				Validators.maxLength(40)
			]),
			RPublicationDate: new FormControl(this.recognitionAdapter.RPublicationDate, [
				Validators.required
			]),
			RIssueDate: new FormControl(this.recognitionAdapter.RIssueDate, [Validators.required]),
			REventDate: new FormControl(this.recognitionAdapter.REventDate, [Validators.required]),
			RVisibility: new FormControl(this.recognitionAdapter.RVisibility, [Validators.required])
		});
	}
	get RTitle() {
		return this.formUpdate.get('RTitle')!;
	}
	get RSummary() {
		return this.formUpdate.get('RSummary')!;
	}
	get RPublicationDate() {
		return this.formUpdate.get('RPublicationDate')!;
	}
	get RIssueDate() {
		return this.formUpdate.get('RIssueDate')!;
	}
	get REventDate() {
		return this.formUpdate.get('REventDate')!;
	}
	get RVisibility() {
		return this.formUpdate.get('RVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		let updateRecognitionDto = new FormData();
		updateRecognitionDto.append('RTitle', this.RTitle.value);
		updateRecognitionDto.append('RSummary', this.RSummary.value);
		updateRecognitionDto.append('RPublicationDate', this.RPublicationDate.value);
		updateRecognitionDto.append('RIssueDate', this.RIssueDate.value);
		updateRecognitionDto.append('REventDate', this.REventDate.value);
		updateRecognitionDto.append('RVisibility', this.RVisibility.value);
		updateRecognitionDto.append('RFile', this.file);

		this.recognitionFacade.update(this.recognitionAdapter.IdRecognition, updateRecognitionDto);
		this.closeDialog(this.recognitionFacade.updateResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
