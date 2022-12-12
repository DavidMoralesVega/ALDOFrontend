import { Component, OnInit } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import {
	Resolution,
	CreateResolutionDto,
	ResolutionAdapter
} from '../../../entities/models/resolutions.model';
import { ResolutionFacade } from '../../../facades/resolutions.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
import { ZListResolutions } from 'src/app/core/entities';

@Component({
	selector: 'z-resolutions-create',
	templateUrl: './resolutions-create.component.html',
	styleUrls: ['./resolutions-create.component.scss']
})
export class ResolutionsCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListResolutions: any[] = ZListResolutions;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly resolutionFacade: ResolutionFacade) {
		this.createIsLoading$ = resolutionFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.formCreate = new FormGroup({
			RETitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RESummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			REPublicationDate: new FormControl('', [Validators.required]),
			REIssueDate: new FormControl('', [Validators.required]),
			REDocumentNumber: new FormControl('', [Validators.required]),
			REStartYear: new FormControl('', [Validators.required]),
			REEndYear: new FormControl('', [Validators.required]),
			REType: new FormControl('', [Validators.required]),

			REVisibility: new FormControl(true, [Validators.required])
		});
	}
	get RETitle() {
		return this.formCreate.get('RETitle')!;
	}
	get RESummary() {
		return this.formCreate.get('RESummary')!;
	}
	get REPublicationDate() {
		return this.formCreate.get('REPublicationDate')!;
	}
	get REIssueDate() {
		return this.formCreate.get('REIssueDate')!;
	}
	get REDocumentNumber() {
		return this.formCreate.get('REDocumentNumber')!;
	}
	get REStartYear() {
		return this.formCreate.get('REStartYear')!;
	}
	get REEndYear() {
		return this.formCreate.get('REEndYear')!;
	}
	get REType() {
		return this.formCreate.get('REType')!;
	}
	get REVisibility() {
		return this.formCreate.get('REVisibility')!;
	}
	create() {
		console.log('hola antes form');

		if (this.formCreate.invalid) return;

		// if (!this.isValidImage) return;
		console.log('REVisibility', this.REVisibility.value);
		console.log('REFile', this.file);

		let createResolutionDto = new FormData();
		createResolutionDto.append('RETitle', this.RETitle.value);
		createResolutionDto.append('RESummary', this.RESummary.value);
		createResolutionDto.append('REPublicationDate', this.REPublicationDate.value);
		createResolutionDto.append('REIssueDate', this.REIssueDate.value);
		createResolutionDto.append('REDocumentNumber', this.REDocumentNumber.value);
		createResolutionDto.append('REStartYear', this.REStartYear.value);
		createResolutionDto.append('REEndYear', this.REEndYear.value);
		createResolutionDto.append('REType', this.REType.value);

		createResolutionDto.append('REVisibility', this.REVisibility.value);
		createResolutionDto.append('REFile', this.file);

		console.log(createResolutionDto);

		this.resolutionFacade.create(createResolutionDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
