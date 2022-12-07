import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { CallAdapter, UpdateCallDto } from '../../../entities';
import { CallFacade } from '../../../facades/call.facade';

@Component({
	selector: 'z-calls-update',
	templateUrl: './calls-update.component.html',
	styleUrls: ['./calls-update.component.scss']
})
export class CallsUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;

	constructor(
		@Inject(MAT_DIALOG_DATA) private readonly callAdapter: CallAdapter,
		private readonly callFacade: CallFacade
	) {
		this.updateIsLoading$ = callFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			call_title: new FormControl(this.callAdapter.call_title, [
				Validators.required,
				Validators.pattern('[a-zA-Z]{1,100}')
			]),
			call_management: new FormControl(this.callAdapter.call_management, [Validators.required]),
			call_modality: new FormControl(this.callAdapter.call_modality, [
				Validators.required,
				Validators.pattern('[a-zA-Z]{1,100}')
			]),
			call_dateUpdate: new FormControl(this.callAdapter.call_dateUpdate, [Validators.required]),
			call_pdfList: new FormControl(this.callAdapter.call_pdfList, [Validators.required])
		});
	}

	get call_title() {
		return this.formUpdate.get('call_title')!;
	}
	get call_management() {
		return this.formUpdate.get('call_management')!;
	}
	get call_modality() {
		return this.formUpdate.get('call_modality')!;
	}
	get call_dateUpdate() {
		return this.formUpdate.get('call_dateUpdate')!;
	}
	get call_pdfList() {
		return this.formUpdate.get('call_pdfList')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateCallDto: UpdateCallDto = {
			call_title: this.call_title.value,
			call_management: this.call_management.value,
			call_modality: this.call_modality.value,
			call_dateUpdate: this.call_dateUpdate.value,
			call_pdfList: this.call_pdfList.value
		};

		this.callFacade.update(this.callAdapter.call_id, updateCallDto);

		// this.matDialogRef.close();
	}
}
