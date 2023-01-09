import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { Pagination, PayloadFile } from 'src/app/core/entities';
import { RecognitionFacade } from '../../../facades/recognition.facade';
@Component({
	selector: 'z-recognition-create',
	templateUrl: './recognition-create.component.html',
	styleUrls: ['./recognition-create.component.scss']
})
export class RecognitionCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	//public ZListRecognitions: any[] = ZListRecognitions;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly recognitionFacade: RecognitionFacade) {
		this.createIsLoading$ = recognitionFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			RTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RPublicationDate: new FormControl('', [Validators.required]),
			RIssueDate: new FormControl('', [Validators.required]),
			REventDate: new FormControl('', [Validators.required]),
			RVisibility: new FormControl(true, [Validators.required])
		});
	}
	get RTitle() {
		return this.formCreate.get('RTitle')!;
	}
	get RSummary() {
		return this.formCreate.get('RSummary')!;
	}
	get RPublicationDate() {
		return this.formCreate.get('RPublicationDate')!;
	}
	get RIssueDate() {
		return this.formCreate.get('RIssueDate')!;
	}
	get REventDate() {
		return this.formCreate.get('REventDate')!;
	}

	get RVisibility() {
		return this.formCreate.get('RVisibility')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		let createRecognitionDto = new FormData();
		createRecognitionDto.append('RTitle', this.RTitle.value);
		createRecognitionDto.append('RSummary', this.RSummary.value);
		createRecognitionDto.append('RPublicationDate', this.RPublicationDate.value);
		createRecognitionDto.append('RIssueDate', this.RIssueDate.value);
		createRecognitionDto.append('REventDate', this.REventDate.value);

		createRecognitionDto.append('RVisibility', this.RVisibility.value);
		createRecognitionDto.append('RFile', this.file);

		this.recognitionFacade.create(createRecognitionDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
