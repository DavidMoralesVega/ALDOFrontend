import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayloadFile, ZListCategorys } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ProccedingFacade } from '../../../facades/procceding.facade';
import { MatDialogRef } from '@angular/material/dialog';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-procceding-create',
	templateUrl: './procceding-create.component.html',
	styleUrls: ['./procceding-create.component.scss']
})
export class ProccedingCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListCategorys: any[] = ZListCategorys;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;
	private readonly dialogRef = inject(MatDialogRef<ProccedingCreateComponent>);
	constructor(private readonly proccedingFacade: ProccedingFacade) {
		super();
		this.createIsLoading$ = proccedingFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			ac_category: new FormControl('', [Validators.required])
		});
	}
	get ac_category() {
		return this.formCreate.get('ac_category')!;
	}

	create() {
		if (this.formCreate.invalid) return;
		let createProccedingDto = new FormData();
		createProccedingDto.append('ac_category', this.ac_category.value);
		createProccedingDto.append('ac_File', this.file);
		this.proccedingFacade.create(createProccedingDto);
		this.closeDialog(this.proccedingFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
