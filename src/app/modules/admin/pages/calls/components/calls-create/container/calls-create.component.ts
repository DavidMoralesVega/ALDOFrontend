import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayloadFile, ZListModalidad, ZListSesiones } from 'src/app/core/entities';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
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

	public ZListsModalidad: any[] = ZListModalidad;

	public ZListsSesiones: any[] = ZListSesiones;

	public filteredOptions!: Observable<string>;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly callFacade: CallFacade) {
		this.createIsLoading$ = callFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();

		// this.filteredOptions = this.call_modality.valueChanges.pipe(map((value: any) => value));
		// this.filteredOptions = this.call_modality.valueChanges.pipe(map())

		console.log(this.filteredOptions);
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			call_title: new FormControl('', [Validators.required]),
			call_hours: new FormControl('', [Validators.required]),
			call_modality: new FormControl('', [Validators.required]),
			call_numSession: new FormControl('', [Validators.required]),
			call_dateUpdate: new FormControl('', [Validators.required]),
			CallVisibility: new FormControl('', [Validators.required])
		});
	}

	get call_title() {
		return this.formCreate.get('call_title')!;
	}
	get call_hours() {
		return this.formCreate.get('call_hours')!;
	}
	get call_modality() {
		return this.formCreate.get('call_modality')!;
	}
	get call_numSession() {
		return this.formCreate.get('call_numSession')!;
	}
	get call_dateUpdate() {
		return this.formCreate.get('call_dateUpdate')!;
	}
	get CallVisibility() {
		return this.formCreate.get('CallVisibility')!;
	}

	private _filterLabels(label: string) {
		return label;
	}

	create() {
		console.log(typeof this.call_hours.value);
		if (this.formCreate.invalid) return;

		let createCallDto = new FormData();
		createCallDto.append('call_title', this.call_title.value);
		createCallDto.append('call_hours', this.call_hours.value);
		createCallDto.append('call_modality', this.call_modality.value);
		createCallDto.append('call_dateUpdate', this.call_dateUpdate.value);
		createCallDto.append('CallVisibility', this.CallVisibility.value);
		createCallDto.append('call_numSession', this.call_numSession.value);
		createCallDto.append('CallFile', this.file);

		// console.log(createCallDto.forEach);
		this.callFacade.create(createCallDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		// console.log(payloadFile);
	}
}
