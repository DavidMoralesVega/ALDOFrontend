import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/entities';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecognitionAdapter, UpdateRecognitionDto } from '../../../entities';
import { RecognitionFacade } from '../../../facades/recognition.facade';
@Component({
	selector: 'z-recognition-update',
	templateUrl: './recognition-update.component.html',
	styleUrls: ['./recognition-update.component.scss']
})
export class RecognitionUpdateComponent implements OnInit {
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
		private readonly recognitionAdapter: RecognitionAdapter,
		private readonly recognitionFacade: RecognitionFacade
	) {
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
			RDocumentNumber: new FormControl(this.recognitionAdapter.RDocumentNumber, [
				Validators.required
			]),
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
	get RDocumentNumber() {
		return this.formUpdate.get('RDocumentNumber')!;
	}
	get RVisibility() {
		return this.formUpdate.get('RVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updateRecognitionDto: UpdateRecognitionDto = {
			RTitle: this.RTitle.value,
			RSummary: this.RSummary.value,
			RPublicationDate: this.RPublicationDate.value,
			RIssueDate: this.RIssueDate.value,
			RDocumentNumber: this.RDocumentNumber.value,
			RVisibility: this.RVisibility.value
		};
		console.log(this.recognitionAdapter.IdRecognition);

		this.recognitionFacade.update(this.recognitionAdapter.IdRecognition, updateRecognitionDto);

		// this.matDialogRef.close();
	}
}
