import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { Pagination, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { LegislatureAdapter } from '../../../../legislature/entities';
import {
	CreateDepartamentLawDto,
	DepartamentLawAdapter,
	UpdateDepartamentLawDto
} from '../../../entities';
import { DepartamentLawFacade } from '../../../facades/departament-law.facade';

@Component({
	selector: 'z-DepartamentLaw-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class DepartamentLawCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public filteredOptions!: Observable<string>;
	public title: string = '';

	public legislatureFindAllResponse$: Observable<Response<LegislatureAdapter[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	public data$ = new Observable();
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<DepartamentLawCreateUpdateComponent>);
	constructor(
		private readonly departamentLawFacade: DepartamentLawFacade,
		private readonly legislatureFacade: LegislatureFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<DepartamentLawAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Leyes Departamentales'
				: 'Actualizar Leyes Departamentales';

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = departamentLawFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;

		this.legislatureFacade.findAllResponse$.subscribe((itemL: any) => {
			if (itemL && itemL.data) {
				const filteredData = itemL.data.filter((item: LegislatureAdapter) => item.LegEstado);
				const response: Response<LegislatureAdapter[]> = {
					isArray: itemL.isArray,
					path: itemL.path,
					duration: itemL.duration,
					method: itemL.method,
					data: filteredData
				};

				this.legislatureFindAllResponse$ = from([response]);
			} else {
				this.legislatureFindAllResponse$ = of(null);
			}
		});
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			dttitle: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			dtsummary: new FormControl('', [Validators.required]),
			dtpublicationdate: new FormControl(new Date(), [Validators.required]),
			dtissueDate: new FormControl('', [Validators.required]),
			DTDocumentNumber: new FormControl('', [Validators.required]),
			dtarea: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			dtvisibility: new FormControl('Público', [Validators.required]),
			legislatura: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			const dtissueDate = new Date(z.dtissueDate);
			dtissueDate.setDate(dtissueDate.getDate() + 1);
			const dtpublicationdate = new Date(z.dtpublicationdate);
			dtpublicationdate.setDate(dtpublicationdate.getDate() + 1);
			this.zForm.patchValue({ ...z, dtissueDate, dtpublicationdate });
		}
	}

	get dttitle() {
		return this.zForm.get('dttitle')!;
	}
	get dtsummary() {
		return this.zForm.get('dtsummary')!;
	}
	get dtpublicationdate() {
		return this.zForm.get('dtpublicationdate')!;
	}
	get dtissueDate() {
		return this.zForm.get('dtissueDate')!;
	}
	get DTDocumentNumber() {
		return this.zForm.get('DTDocumentNumber')!;
	}
	get dtarea() {
		return this.zForm.get('dtarea')!;
	}
	get dtvisibility() {
		return this.zForm.get('dtvisibility')!;
	}
	get legislatura(): FormControl<LegislatureAdapter> {
		return this.zForm.get('legislatura') as FormControl<LegislatureAdapter>;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	getDisplayLegislature(option: LegislatureAdapter): string {
		return option ? option.LegDescripcion : '';
	}

	private getCreateUpdateInput(): CreateDepartamentLawDto {
		return {
			dttitle: this.dttitle.value,
			dtsummary: this.dtsummary.value,
			dtpublicationdate: this.dtpublicationdate.value,
			dtissueDate: this.dtissueDate.value,
			DTDocumentNumber: this.DTDocumentNumber.value.toString(),
			dtarea: this.dtarea.value,
			dtvisibility: this.dtvisibility.value,
			IddeparLwLeg: this.legislatura.value.IdLegislatura,
			DTFile: this.paths[0]
		};
	}

	private create(): void {
		const createDepartamentLawDto: CreateDepartamentLawDto = this.getCreateUpdateInput();
		this.departamentLawFacade.create(createDepartamentLawDto);
		this.closeDialog(this.departamentLawFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateDepartamentLawDto: UpdateDepartamentLawDto = {
			...this.getCreateUpdateInput()
		};

		this.departamentLawFacade.update(
			this.payloadDialog.z.IdDepartamentaLaw,
			updateDepartamentLawDto
		);
		this.closeDialog(this.departamentLawFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'departament-law',
			maxSize: '2',
			acceptedExtensions: 'application/pdf',
			multiple: false
		};
		this.matDialog
			.open(FileUploadComponent, {
				width: '840px',
				height: '756px',
				data: createFileUploadDto
			})
			.afterClosed()
			.subscribe({
				next: (files: any) => {
					this.paths = files.data.paths;
				}
			});
	}
}
