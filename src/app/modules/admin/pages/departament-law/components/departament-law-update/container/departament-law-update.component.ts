import { Component, OnInit, Inject } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/core/entities';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentLawFacade } from '../../../facades/departament-law.facade';
import { UpdateDepartamentLawDto } from '../../../entities/models/departament-law.model';
import {
	DepartamentLaw,
	DepartamentLawAdapter
} from '../../../entities/models/departament-law.model';

@Component({
	selector: 'z-departament-law-update',
	templateUrl: './departament-law-update.component.html',
	styleUrls: ['./departament-law-update.component.scss']
})
export class DepartamentLawUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});
	public updateIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private readonly departamentLawAdapter: DepartamentLawAdapter,
		private readonly departamentLawFacade: DepartamentLawFacade
	) {
		this.updateIsLoading$ = departamentLawFacade.updateIsLoading$;
	}
	ngOnInit(): void {
		this.initFormUpdate();
	}
	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			DTTitle: new FormControl(this.departamentLawAdapter.DTTitle, [
				Validators.required,
				Validators.maxLength(40)
			]),
			DTSummary: new FormControl(this.departamentLawAdapter.DTSummary, [
				Validators.required,
				Validators.maxLength(40)
			]),
			DTPublicationDate: new FormControl(this.departamentLawAdapter.DTPublicationDate, [
				Validators.required
			]),
			DTIssueDate: new FormControl(this.departamentLawAdapter.DTIssueDate, [
				Validators.required
			]),
			DTDocumentNumber: new FormControl(this.departamentLawAdapter.DTDocumentNumber, [
				Validators.required
			]),
			DTVisibility: new FormControl(this.departamentLawAdapter.DTVisibility, [
				Validators.required
			])
		});
	}
	get DTTitle() {
		return this.formUpdate.get('DTTitle')!;
	}
	get DTSummary() {
		return this.formUpdate.get('DTSummary')!;
	}
	get DTPublicationDate() {
		return this.formUpdate.get('DTPublicationDate')!;
	}
	get DTIssueDate() {
		return this.formUpdate.get('DTIssueDate')!;
	}
	get DTDocumentNumber() {
		return this.formUpdate.get('DTDocumentNumber')!;
	}
	get DTVisibility() {
		return this.formUpdate.get('DTVisibility')!;
	}
	update() {
		if (this.formUpdate.invalid) return;

		const updateDepartamentLawDto: UpdateDepartamentLawDto = {
			DTTitle: this.DTTitle.value,
			DTSummary: this.DTSummary.value,
			DTPublicationDate: this.DTPublicationDate.value,
			DTIssueDate: this.DTIssueDate.value,
			DTDocumentNumber: this.DTDocumentNumber.value,
			DTVisibility: this.DTVisibility.value
		};
		console.log(this.departamentLawAdapter.IdDepartamentaLaw);

		this.departamentLawFacade.update(
			this.departamentLawAdapter.IdDepartamentaLaw,
			updateDepartamentLawDto
		);

		// this.matDialogRef.close();
	}
}
