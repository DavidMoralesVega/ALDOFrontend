import { Component, OnInit } from '@angular/core';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import { LibraryFacade } from '../../../facades/library.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';
import {
	ZListCategory,
	ZListModule
} from '../../../../../../../core/entities/constants/app.route-names';

@Component({
	selector: 'z-library-create',
	templateUrl: './library-create.component.html',
	styleUrls: ['./library-create.component.scss']
})
export class LibraryCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListCategory: any[] = ZListCategory;
	public ZListModule: any[] = ZListModule;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	constructor(private readonly libraryFacade: LibraryFacade) {
		this.createIsLoading$ = libraryFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			LTitle: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			LDescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			LCategory: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			LModule: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			LVisibility: new FormControl('Público', [Validators.required, Validators.maxLength(50)])
		});
	}
	get LTitle() {
		return this.formCreate.get('LTitle')!;
	}
	get LDescription() {
		return this.formCreate.get('LDescription')!;
	}
	get LCategory() {
		return this.formCreate.get('LCategory')!;
	}
	get LModule() {
		return this.formCreate.get('LModule')!;
	}
	get LVisibility() {
		return this.formCreate.get('LVisibility')!;
	}
	create() {
		console.log('hola antes form');

		if (this.formCreate.invalid) return;

		// if (!this.isValidImage) return;
		console.log('LVisibility', this.LVisibility.value);
		console.log('LFile', this.file);

		let createLibraryDto = new FormData();
		createLibraryDto.append('LTitle', this.LTitle.value);
		createLibraryDto.append('LDescription', this.LDescription.value);
		createLibraryDto.append('LCategory', this.LCategory.value);
		createLibraryDto.append('LModule', this.LModule.value);
		createLibraryDto.append('LVisibility', this.LVisibility.value);

		createLibraryDto.append('LFile', this.file);

		console.log(createLibraryDto);

		this.libraryFacade.create(createLibraryDto);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;

		console.log(payloadFile);
	}
}
