import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pagination, ZListModalidad, ZListSesiones, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { CallFacade } from '../../../facades/call.facade';
import { CallAdapter, CreateCallDto, UpdateCallDto } from '../../../entities';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { LegislatureAdapter } from '../../../../legislature/entities';
import { ZE_Patterns } from 'src/app/core/constants/patterns.enum';

@Component({
	selector: 'z-Call-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class CallCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public ZListsModalidad: any[] = ZListModalidad;
	public ZListsSesiones: any[] = ZListSesiones;
	public NewListsSesiones: any[] = [];
	public filteredOptions!: Observable<string>;
	public title: string = '';

	public legislatureFindAllResponse$: Observable<Response<LegislatureAdapter[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<CallCreateUpdateComponent>);
	constructor(
		private readonly callFacade: CallFacade,
		private readonly legislatureFacade: LegislatureFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<CallAdapter>
	) {
		super();

		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Convocatoria'
				: 'Actualizar Convocatoria';

		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = callFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			call_title: new FormControl('', [
				Validators.required,
				Validators.maxLength(100),
				Validators.pattern(`${ZE_Patterns.letter_space}{1,100}`)
			]),
			call_hours: new FormControl('', [Validators.required]),
			call_modality: new FormControl('', [Validators.required]),
			call_numSession: new FormControl('', [Validators.required]),
			call_dateUpdate: new FormControl('', [Validators.required]),
			CallVisibility: new FormControl('Público', [Validators.required]),
			legislatura: new FormControl('', [Validators.required])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			this.zForm.patchValue({ ...z });
		}
	}

	get call_title() {
		return this.zForm.get('call_title')!;
	}
	get call_hours() {
		return this.zForm.get('call_hours')!;
	}
	get call_modality() {
		return this.zForm.get('call_modality')!;
	}
	get call_numSession() {
		return this.zForm.get('call_numSession')!;
	}
	get call_dateUpdate() {
		return this.zForm.get('call_dateUpdate')!;
	}
	get CallVisibility() {
		return this.zForm.get('CallVisibility')!;
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

	private getCreateUpdateInput(): CreateCallDto {
		return {
			call_title: this.call_title.value,
			call_hours: this.call_hours.value,
			call_modality: this.call_modality.value,
			call_numSession: this.call_numSession.value,
			call_dateUpdate: this.call_dateUpdate.value,
			CallVisibility: this.CallVisibility.value,
			IdcallLeg: this.legislatura.value.IdLegislatura,
			CallFile: this.paths[0]
		};
	}

	private create(): void {
		const createCallDto: CreateCallDto = this.getCreateUpdateInput();
		this.callFacade.create(createCallDto);
		this.closeDialog(this.callFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateCallDto: UpdateCallDto = {
			...this.getCreateUpdateInput()
		};

		this.callFacade.update(this.payloadDialog.z.call_id, updateCallDto);
		this.closeDialog(this.callFacade.updateResponse$, this.dialogRef);
	}

	onChange(data: string) {
		let dataNew = parseInt(data);

		if (dataNew === 60) {
			this.init();
			for (let index = 0; index < dataNew; index++) {
				this.NewListsSesiones.push(this.ZListsSesiones[index]);
			}
		}
		if (dataNew === 50) {
			this.init();
			for (let index = 0; index < dataNew; index++) {
				this.NewListsSesiones.push(this.ZListsSesiones[index]);
			}
		}
		if (dataNew === 20) {
			this.init();
			for (let index = 0; index < dataNew; index++) {
				this.NewListsSesiones.push(this.ZListsSesiones[index]);
			}
		}
		this.ZListsSesiones = this.NewListsSesiones;
	}

	init() {
		this.ZListsSesiones = [];
		this.NewListsSesiones = [];
		this.ZListsSesiones = ZListSesiones;
	}

	openFileUpload(): void {
		const createFileUploadDto: CreateFileUploadDto = {
			directory: 'call',
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
