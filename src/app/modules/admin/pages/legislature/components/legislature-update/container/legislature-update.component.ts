import { Component, OnInit, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import {
	LegislatureAdapter,
	UpdateLegislatureDto
} from '../../../entities/models/legislature.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LegislatureFacade } from '../../../facades/legislature.facade';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-legislature-update',
	templateUrl: './legislature-update.component.html'
})
export class LegislatureUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formUpdate: FormGroup = new FormGroup({});

	public updateIsLoading$: Observable<boolean>;
	private readonly dialogRef = inject(MatDialogRef<LegislatureUpdateComponent>);
	constructor(
		@Inject(MAT_DIALOG_DATA) private readonly legislatureAdapter: LegislatureAdapter,
		private readonly LegislatureFacade: LegislatureFacade
	) {
		super();
		this.updateIsLoading$ = LegislatureFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.initFormUpdate();
	}

	initFormUpdate(): void {
		this.formUpdate = new FormGroup({
			LegDescripcion: new FormControl(this.legislatureAdapter.LegDescripcion, [
				Validators.required
			])
		});
	}

	get LegDescripcion() {
		return this.formUpdate.get('LegDescripcion')!;
	}

	update() {
		if (this.formUpdate.invalid) return;

		const updateLegislatureDto: UpdateLegislatureDto = {
			LegDescripcion: this.LegDescripcion.value
		};

		this.LegislatureFacade.update(this.legislatureAdapter.IdLegislatura, updateLegislatureDto);
		this.closeDialog(this.LegislatureFacade.updateResponse$, this.dialogRef);
	}
}
