import { Component, inject } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResolutionFacade } from '../../../facades/resolutions.facade';
import { PayloadFile, Response, Pagination } from 'src/app/core/entities';
import { ZListResolutions } from 'src/app/core/entities';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Legislature } from '../../../../legislature/entities';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'z-resolutions-create',
	templateUrl: './resolutions-create.component.html'
})
export class ResolutionsCreateComponent extends ZBaseService {
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

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
	private readonly dialogRef = inject(MatDialogRef<ResolutionsCreateComponent>);

	constructor(
		private readonly resolutionFacade: ResolutionFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = resolutionFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
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
			REType: new FormControl('', [Validators.required]),
			REVisibility: new FormControl('Privado', [Validators.required]),
			IdresolLeg: new FormControl([Validators.required])
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

	get REType() {
		return this.formCreate.get('REType')!;
	}
	get REVisibility() {
		return this.formCreate.get('REVisibility')!;
	}
	get IdresolLeg() {
		return this.formCreate.get('IdresolLeg')!;
	}
	create() {
		if (this.formCreate.invalid) return;

		let createResolutionDto = new FormData();
		createResolutionDto.append('RETitle', this.RETitle.value);
		createResolutionDto.append('RESummary', this.RESummary.value);
		createResolutionDto.append('REPublicationDate', this.REPublicationDate.value);
		createResolutionDto.append('REIssueDate', this.REIssueDate.value);
		createResolutionDto.append('REDocumentNumber', this.REDocumentNumber.value);
		createResolutionDto.append('REType', this.REType.value);
		createResolutionDto.append('REVisibility', this.REVisibility.value);
		createResolutionDto.append('REFile', this.file);
		createResolutionDto.append('IdresolLeg', this.IdresolLeg.value);

		this.resolutionFacade.create(createResolutionDto);
		this.closeDialog(this.resolutionFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
