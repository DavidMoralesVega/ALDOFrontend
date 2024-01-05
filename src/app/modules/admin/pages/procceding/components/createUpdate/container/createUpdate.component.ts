import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ZListCategorys } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { ProccedingFacade } from '../../../facades/procceding.facade';
import { CreateProccedingDto, ProccedingAdapter, UpdateProccedingDto } from '../../../entities';

@Component({
	selector: 'z-procceding-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class ProccedingCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListCategorys: any[] = ZListCategorys;
	title: string = '';

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<ProccedingCreateUpdateComponent>);

	constructor(
		private readonly proccedingFacade: ProccedingFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<ProccedingAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create ? 'Crear Acta' : 'Actualizar Acta';

		this.createIsLoading$ = proccedingFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.zForm = new FormGroup({
			ac_category: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			this.zForm.patchValue({ ...z });
		}
	}

	get ac_category() {
		return this.zForm.get('ac_category')!;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	private getCreateUpdateInput(): CreateProccedingDto {
		return {
			ac_category: this.ac_category.value,
			ac_File: this.paths[0]
		};
	}

	private create(): void {
		const createProccedingDto: CreateProccedingDto = this.getCreateUpdateInput();
		this.proccedingFacade.create(createProccedingDto);
		this.closeDialog(this.proccedingFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateProccedingDto: UpdateProccedingDto = {
			...this.getCreateUpdateInput()
		};

		this.proccedingFacade.update(this.payloadDialog.z.ac_id, updateProccedingDto);
		this.closeDialog(this.proccedingFacade.updateResponse$, this.dialogRef);
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'proceeding',
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
