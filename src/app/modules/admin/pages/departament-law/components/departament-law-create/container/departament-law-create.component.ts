import { Component, inject } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DepartamentLawFacade } from '../../../facades/departament-law.facade';
import { PayloadFile, ZListArea, Response, Pagination } from 'src/app/core/entities';
import * as _moment from 'moment';
import { Legislature } from '../../../../legislature/entities';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-departament-law-create',
	templateUrl: './departament-law-create.component.html',
	styleUrls: ['./departament-law-create.component.scss']
})
export class DepartamentLawCreateComponent extends ZBaseService {
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListArea: any[] = ZListArea;
	private file!: File;
	private isValidImage: boolean = false;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	private readonly dialogRef = inject(MatDialogRef<DepartamentLawCreateComponent>);

	constructor(
		private readonly departamentLawFacade: DepartamentLawFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();
		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = departamentLawFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.formCreate = new FormGroup({
			DTTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			DTSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			DTPublicationDate: new FormControl(new Date(), [Validators.required]),
			DTIssueDate: new FormControl('', [Validators.required]),
			DTDocumentNumber: new FormControl('', [Validators.required]),
			dtarea: new FormControl('', [Validators.required]),
			DTVisibility: new FormControl('Público', [Validators.required]),
			IddeparLwLeg: new FormControl([Validators.required])
		});
	}
	get DTTitle() {
		return this.formCreate.get('DTTitle')!;
	}
	get DTSummary() {
		return this.formCreate.get('DTSummary')!;
	}
	get DTPublicationDate() {
		return this.formCreate.get('DTPublicationDate')!;
	}
	get DTIssueDate() {
		return this.formCreate.get('DTIssueDate')!;
	}
	get DTDocumentNumber() {
		return this.formCreate.get('DTDocumentNumber')!;
	}
	get dtarea() {
		return this.formCreate.get('dtarea')!;
	}
	get DTVisibility() {
		return this.formCreate.get('DTVisibility')!;
	}
	get IddeparLwLeg() {
		return this.formCreate.get('IddeparLwLeg')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		let createDepartamentLawDto = new FormData();
		createDepartamentLawDto.append('dttitle', this.DTTitle.value);
		createDepartamentLawDto.append('dtsummary', this.DTSummary.value);
		createDepartamentLawDto.append('dtpublicationdate', this.DTPublicationDate.value);
		createDepartamentLawDto.append('dtissueDate', this.DTIssueDate.value);
		createDepartamentLawDto.append('DTDocumentNumber', this.DTDocumentNumber.value);
		createDepartamentLawDto.append('dtarea', this.dtarea.value);
		createDepartamentLawDto.append('dtvisibility', this.DTVisibility.value);
		createDepartamentLawDto.append('DTFile', this.file);
		createDepartamentLawDto.append('IddeparLwLeg', this.IddeparLwLeg.value);

		this.departamentLawFacade.create(createDepartamentLawDto);
		this.closeDialog(this.departamentLawFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
