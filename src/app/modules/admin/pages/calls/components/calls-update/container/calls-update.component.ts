import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { UpdateCallDto } from '../../../entities';
import { CallFacade } from '../../../facades/call.facade';
import { UpdateCallForeignAdapter } from '../../../entities/models/call.model';
import { ZListModalidad, ZListSesiones, Response } from 'src/app/core/entities';
import { Legislature } from '../../../../legislature/entities/models/legislature.model';
import { Pagination } from '../../../../../../../core/entities/interfaces/pagination.interface';
import { LegislatureFacade } from '../../../../legislature/facades/legislature.facade';
import { PayloadFile } from '../../../../../../../core/entities/adapters/object.adapter';

@Component({
	selector: 'z-calls-update',
	templateUrl: './calls-update.component.html',
	styleUrls: ['./calls-update.component.scss']
})
export class CallsUpdateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;
	public ZListsModalidad: any[] = ZListModalidad;
	public ZListsSesiones: any[] = ZListSesiones;
	public NewListsSesiones: any[] = [];

	public legislatureFindAllResponse$: Observable<Response<Legislature[]> | null>;
	public legislatureFindAllIsLoading$: Observable<boolean>;
	private pagination: Pagination = {
		limit: 100,
		offset: 0,
		filter: 'ALL'
	};

	private file!: File;
	private isValidImage: boolean = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) private readonly UpdateCallForeignAdapter: UpdateCallForeignAdapter,
		private readonly callFacade: CallFacade,
		private readonly legislatureFacade: LegislatureFacade
	) {
		this.onChange(this.UpdateCallForeignAdapter.call_modality);
		this.legislatureFacade.findAll(this.pagination);
		this.updateIsLoading$ = callFacade.updateIsLoading$;
		this.legislatureFindAllIsLoading$ = this.legislatureFacade.findAllIsLoading$;
		this.legislatureFindAllResponse$ = this.legislatureFacade.findAllResponse$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			call_title: new FormControl(this.UpdateCallForeignAdapter.call_title, [
				Validators.required
			]),
			call_hours: new FormControl(this.UpdateCallForeignAdapter.call_hours, [
				Validators.required
			]),
			call_modality: new FormControl(this.UpdateCallForeignAdapter.call_modality, [
				Validators.required
			]),
			call_numSession: new FormControl(this.UpdateCallForeignAdapter.call_numSession, [
				Validators.required
			]),
			call_dateUpdate: new FormControl(this.UpdateCallForeignAdapter.call_dateUpdate, [
				Validators.required
			]),
			CallVisibility: new FormControl(this.UpdateCallForeignAdapter.CallVisibility, [
				Validators.required
			]),
			IdcallLeg: new FormControl(this.UpdateCallForeignAdapter.legislatura.IdLegislatura, [
				Validators.required
			])
		});
	}

	get call_title() {
		return this.formUpdate.get('call_title')!;
	}
	get call_hours() {
		return this.formUpdate.get('call_hours')!;
	}
	get call_modality() {
		return this.formUpdate.get('call_modality')!;
	}
	get call_numSession() {
		return this.formUpdate.get('call_numSession')!;
	}
	get call_dateUpdate() {
		return this.formUpdate.get('call_dateUpdate')!;
	}
	get CallVisibility() {
		return this.formUpdate.get('CallVisibility')!;
	}
	get IdcallLeg() {
		return this.formUpdate.get('IdcallLeg')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		/* const updateCallDto: UpdateCallDto = {
			call_title: this.call_title.value,
			call_hours: this.call_hours.value,
			call_modality: this.call_modality.value,
			call_numSession: this.call_numSession.value,
			call_dateUpdate: this.call_dateUpdate.value,
			CallVisibility: this.CallVisibility.value,
			IdcallLeg: this.IdcallLeg.value
		}; */

		let updateCallDto = new FormData();
		updateCallDto.append('call_title', this.call_title.value);
		updateCallDto.append('call_hours', this.call_hours.value);
		updateCallDto.append('call_modality', this.call_modality.value);
		updateCallDto.append('call_dateUpdate', this.call_dateUpdate.value);
		updateCallDto.append('CallVisibility', this.CallVisibility.value);
		updateCallDto.append('call_numSession', this.call_numSession.value);
		updateCallDto.append('CallFile', this.file);
		updateCallDto.append('IdcallLeg', this.IdcallLeg.value);

		this.callFacade.update(this.UpdateCallForeignAdapter.call_id, updateCallDto);
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

	// Obtener imagen
	handleUpload(payloadFile: PayloadFile) {
		this.isValidImage = payloadFile.isValid;
		this.file = payloadFile.file;
	}
}
