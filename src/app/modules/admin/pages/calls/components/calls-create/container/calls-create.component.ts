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
import { MatDialogRef } from '@angular/material/dialog';

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

		// this.filteredOptions = this.call_modality.valueChanges.pipe(map((value: any) => value));
		// this.filteredOptions = this.call_modality.valueChanges.pipe(map())
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			call_title: new FormControl('', [Validators.required]),
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

		let createCallDto = new FormData();
		createCallDto.append('call_title', this.call_title.value);
		createCallDto.append('call_hours', this.call_hours.value);
		createCallDto.append('call_modality', this.call_modality.value);
		createCallDto.append('call_dateUpdate', this.call_dateUpdate.value);
		createCallDto.append('CallVisibility', this.CallVisibility.value);
		createCallDto.append('call_numSession', this.call_numSession.value);
		createCallDto.append('CallFile', this.file);
		createCallDto.append('IdcallLeg', this.IdcallLeg.value);

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
}
