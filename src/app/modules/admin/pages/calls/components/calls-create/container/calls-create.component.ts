import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { CreateCallDto } from '../../../entities';
import { CallFacade } from '../../../facades/call.facade';

@Component({
	selector: 'z-calls-create',
	templateUrl: './calls-create.component.html',
	styleUrls: ['./calls-create.component.scss']
})
export class CallsCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});

	public createIsLoading$: Observable<boolean>;

	constructor(private readonly callFacade: CallFacade) {
		this.createIsLoading$ = callFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			call_title: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z]{1,100}')
			]),
			call_management: new FormControl('', [Validators.required]),
			call_modality: new FormControl('', [
				Validators.required,
				Validators.pattern('[a-zA-Z]{1,100}')
			]),
			call_dateUpdate: new FormControl('', [Validators.required]),
			call_pdfList: new FormControl('', [Validators.required])
		});
	}

	get call_title() {
		return this.formCreate.get('call_title')!;
	}
	get call_management() {
		return this.formCreate.get('call_management')!;
	}
	get call_modality() {
		return this.formCreate.get('call_modality')!;
	}
	get call_dateUpdate() {
		return this.formCreate.get('call_dateUpdate')!;
	}
	get call_pdfList() {
		return this.formCreate.get('call_pdfList')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		const createCallDto: CreateCallDto = {
			call_title: this.call_title.value,
			call_management: this.call_management.value,
			call_modality: this.call_modality.value,
			call_dateUpdate: this.call_dateUpdate.value,
			call_pdfList: this.call_pdfList.value
		};

		this.callFacade.create(createCallDto);
	}
}
