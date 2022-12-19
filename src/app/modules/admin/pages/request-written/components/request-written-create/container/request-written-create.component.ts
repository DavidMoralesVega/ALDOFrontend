import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayloadFile, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { RequestWrittenFacade } from '../../../facades/request-written.facade';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Legislature } from '../../../../legislature/entities';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';

@Component({
	selector: 'z-request-written-create',
	templateUrl: './request-written-create.component.html',
	styleUrls: ['./request-written-create.component.scss']
})
export class RequestWrittenCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	constructor(
		private readonly requestWrittenFacade: RequestWrittenFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = requestWrittenFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			RWTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			RWPublicationDate: new FormControl('', [Validators.required]),
			RWIssueDate: new FormControl('', [Validators.required]),
			RWVisibility: new FormControl('Público', [Validators.required]),
			IdreqWrLeg: new FormControl([Validators.required])
		});
	}
	get RWTitle() {
		return this.formCreate.get('RWTitle')!;
	}
	get RWSummary() {
		return this.formCreate.get('RWSummary')!;
	}
	get RWPublicationDate() {
		return this.formCreate.get('RWPublicationDate')!;
	}
	get RWIssueDate() {
		return this.formCreate.get('RWIssueDate')!;
	}
	get RWVisibility() {
		return this.formCreate.get('RWVisibility')!;
	}
	get IdreqWrLeg() {
		return this.formCreate.get('IdreqWrLeg')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		let createResolutionDto = new FormData();
		createResolutionDto.append('RWTitle', this.RWTitle.value);
		createResolutionDto.append('RWSummary', this.RWSummary.value);
		createResolutionDto.append('RWPublicationDate', this.RWPublicationDate.value);
		createResolutionDto.append('RWIssueDate', this.RWIssueDate.value);
		createResolutionDto.append('RWVisibility', this.RWVisibility.value);
		createResolutionDto.append('RWFile', this.file);
		createResolutionDto.append('IdreqWrLeg', this.IdreqWrLeg.value);

		this.requestWrittenFacade.create(createResolutionDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
