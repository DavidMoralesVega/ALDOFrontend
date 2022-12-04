import { Component, OnInit } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import {
	DepartamentLaw,
	CreateDepartamentLawDto
} from '../../../entities/models/departament-law.model';
import { DepartamentLawFacade } from '../../../facades/departament-law.facade';

@Component({
	selector: 'z-departament-law-create',
	templateUrl: './departament-law-create.component.html',
	styleUrls: ['./departament-law-create.component.scss']
})
export class DepartamentLawCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};
	constructor(private readonly departamentLawFacade: DepartamentLawFacade) {
		this.createIsLoading$ = departamentLawFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.formCreate = new FormGroup({
			DTTitle: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			DTSummary: new FormControl('', [Validators.required, Validators.maxLength(40)]),
			DTPublicationDate: new FormControl('', [Validators.required]),
			DTIssueDate: new FormControl('', [Validators.required]),
			DTDocumentNumber: new FormControl('', [Validators.required]),
			DTVisibility: new FormControl(true, [Validators.required])
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
	get DTVisibility() {
		return this.formCreate.get('DTVisibility')!;
	}
	create() {
		if (this.formCreate.invalid) return;

		const createDepartamentLawDto: CreateDepartamentLawDto = {
			DTTitle: this.DTTitle.value,
			DTSummary: this.DTSummary.value,
			DTPublicationDate: this.DTPublicationDate.value,
			DTIssueDate: this.DTIssueDate.value,
			DTDocumentNumber: this.DTDocumentNumber.value,
			DTVisibility: this.DTVisibility.value
		};
		console.log(createDepartamentLawDto);

		this.departamentLawFacade.create(createDepartamentLawDto);
	}
}
