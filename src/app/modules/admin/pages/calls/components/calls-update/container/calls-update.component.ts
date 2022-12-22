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
			call_hours: new FormControl(this.callAdapter.call_hours, [Validators.required]),
			call_modality: new FormControl(this.callAdapter.call_modality, [
				Validators.required,
				Validators.pattern('[a-zA-Z]{1,100}')
			]),
			call_dateUpdate: new FormControl(this.callAdapter.call_dateUpdate, [Validators.required]),
			CallVisibility: new FormControl(this.callAdapter.CallVisibility, [Validators.required])
		});
	}

	get call_title() {
		return this.formUpdate.get('call_title')!;
	}
	get call_hours() {
		return this.formUpdate.get('call_hours')!;
	}
	get call_modality() {
		return this.formUpdate.get('call_modality')!;
	}
	get call_dateUpdate() {
		return this.formUpdate.get('call_dateUpdate')!;
	}
	get CallVisibility() {
		return this.formUpdate.get('CallVisibility')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateCallDto: UpdateCallDto = {
			call_title: this.call_title.value,
			call_hours: this.call_hours.value,
			call_modality: this.call_modality.value,
			call_dateUpdate: this.call_dateUpdate.value,
			CallVisibility: this.CallVisibility.value
		};

		this.callFacade.update(this.callAdapter.call_id, updateCallDto);

		// this.matDialogRef.close();
	}
}
