import { Component, OnInit, Inject, inject } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartamentLawFacade } from '../../../facades/departament-law.facade';
import {
	UpdateDepartamentLawDto,
	UpdateDepartamentLawForeignAdapter
} from '../../../entities/models/departament-law.model';
import { PayloadFile, ZListArea, Response, Pagination } from 'src/app/core/entities';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-departament-law-update',
	templateUrl: './departament-law-update.component.html',
	styleUrls: ['./departament-law-update.component.scss']
})
export class DepartamentLawUpdateComponent extends ZBaseService {
	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;
	public ZListArea: any[] = ZListArea;

	private file!: File;
	private isValidImage: boolean = false;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};
	private readonly dialogRef = inject(MatDialogRef<DepartamentLawUpdateComponent>);

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly UpdateDepartamentLawForeignAdapter: UpdateDepartamentLawForeignAdapter,
		private readonly departamentLawFacade: DepartamentLawFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();
		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = departamentLawFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			dttitle: new FormControl(this.UpdateDepartamentLawForeignAdapter.dttitle, [
				Validators.required
			]),
			dtsummary: new FormControl(this.UpdateDepartamentLawForeignAdapter.dtsummary, [
				Validators.required
			]),
			dtpublicationdate: new FormControl(
				this.UpdateDepartamentLawForeignAdapter.dtpublicationdate,
				[Validators.required]
			),
			dtissueDate: new FormControl(this.UpdateDepartamentLawForeignAdapter.dtissueDate, [
				Validators.required
			]),
			DTDocumentNumber: new FormControl(
				this.UpdateDepartamentLawForeignAdapter.DTDocumentNumber,
				[Validators.required]
			),
			dtarea: new FormControl(this.UpdateDepartamentLawForeignAdapter.dtarea, [
				Validators.required
			]),
			dtvisibility: new FormControl(this.UpdateDepartamentLawForeignAdapter.dtvisibility, [
				Validators.required
			]),
			IddeparLwLeg: new FormControl(
				this.UpdateDepartamentLawForeignAdapter.legislatura.IdLegislatura,
				[Validators.required]
			)
		});
	}
	get dttitle() {
		return this.formUpdate.get('dttitle')!;
	}
	get dtsummary() {
		return this.formUpdate.get('dtsummary')!;
	}
	get dtpublicationdate() {
		return this.formUpdate.get('dtpublicationdate')!;
	}
	get dtissueDate() {
		return this.formUpdate.get('dtissueDate')!;
	}
	get DTDocumentNumber() {
		return this.formUpdate.get('DTDocumentNumber')!;
	}
	get dtarea() {
		return this.formUpdate.get('dtarea')!;
	}
	get dtvisibility() {
		return this.formUpdate.get('dtvisibility')!;
	}
	get IddeparLwLeg() {
		return this.formUpdate.get('IddeparLwLeg')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		let updateDepartamentLawDto = new FormData();
		updateDepartamentLawDto.append('dttitle', this.dttitle.value);
		updateDepartamentLawDto.append('dtsummary', this.dtsummary.value);
		updateDepartamentLawDto.append('dtpublicationdate', this.dtpublicationdate.value);
		updateDepartamentLawDto.append('dtissueDate', this.dtissueDate.value);
		updateDepartamentLawDto.append('DTDocumentNumber', this.DTDocumentNumber.value);
		updateDepartamentLawDto.append('dtvisibility', this.dtvisibility.value);
		updateDepartamentLawDto.append('dtarea', this.dtarea.value);
		updateDepartamentLawDto.append('DTFile', this.file);
		updateDepartamentLawDto.append('IddeparLwLeg', this.IddeparLwLeg.value);

		this.departamentLawFacade.update(
			this.UpdateDepartamentLawForeignAdapter.IdDepartamentaLaw,
			updateDepartamentLawDto
		);
		this.closeDialog(this.departamentLawFacade.updateResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
