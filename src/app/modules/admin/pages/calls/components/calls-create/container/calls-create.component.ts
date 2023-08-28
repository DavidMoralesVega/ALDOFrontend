import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayloadFile, ZListModalidad, ZListSesiones, Response } from 'src/app/core/entities';
import { DefaultErrorMatcher } from '../../../../../../../core/shared/default.error-matcher';
import { CallFacade } from '../../../facades/call.facade';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ZE_Patterns } from 'src/app/core/constants/patterns.enum';
import { CreateFileUploadDto, FileUploadComponent } from 'src/app/core/components/file-upload/z';
import { CreateCallDto } from '../../../entities';

@Component({
	selector: 'z-calls-create',
	templateUrl: './calls-create.component.html',
	styleUrls: ['./calls-create.component.scss']
})
export class CallsCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	public ZListsModalidad: any[] = ZListModalidad;
	public ZListsSesiones: any[] = ZListSesiones;
	public NewListsSesiones: any[] = [];
	public filteredOptions!: Observable<string>;

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;

	// variables imagen
	private file!: File;
	private isValidImage: boolean = false;

	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	private readonly dialogRef = inject(MatDialogRef<CallsCreateComponent>);

	constructor(
		private readonly callFacade: CallFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		super();
		this.legislatureFacade.findAll(this.pagination);
		this.createIsLoading$ = callFacade.createIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
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
			IdcallLeg: new FormControl('', [Validators.required])
		});
	}

	get call_title() {
		return this.formCreate.get('call_title')!;
	}
	get call_hours() {
		return this.formCreate.get('call_hours')!;
	}
	get call_modality() {
		return this.formCreate.get('call_modality')!;
	}
	get call_numSession() {
		return this.formCreate.get('call_numSession')!;
	}
	get call_dateUpdate() {
		return this.formCreate.get('call_dateUpdate')!;
	}
	get CallVisibility() {
		return this.formCreate.get('CallVisibility')!;
	}
	get IdcallLeg() {
		return this.formCreate.get('IdcallLeg')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		const createCallDto: CreateCallDto = {
			call_title: this.call_title.value,
			call_hours: this.call_hours.value,
			call_modality: this.call_modality.value,
			call_numSession: this.call_numSession.value,
			call_dateUpdate: this.call_dateUpdate.value,
			CallVisibility: this.CallVisibility.value,
			IdcallLeg: this.IdcallLeg.value,
			CallFile: this.paths[0]
		};

		this.callFacade.create(createCallDto);
		this.closeDialog(this.callFacade.createResponse$, this.dialogRef);
	}

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
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
			acceptedExtensions: 'application/mp4',
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
					console.log(files);
					this.paths = files.data.paths;
				}
			});
	}
}
