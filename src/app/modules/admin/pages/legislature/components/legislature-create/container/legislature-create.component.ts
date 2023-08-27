import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { CreateLegislatureDto } from '../../../entities';
import { LegislatureFacade } from '../../../facades/legislature.facade';
import { MatDialogRef } from '@angular/material/dialog';
import { ZBaseService } from 'src/app/core/services/base.service';

@Component({
	selector: 'z-legislature-create',
	templateUrl: './legislature-create.component.html'
})
export class LegislatureCreateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	private readonly dialogRef = inject(MatDialogRef<LegislatureCreateComponent>);
	constructor(private readonly legislatureFacade: LegislatureFacade) {
		super();
		this.createIsLoading$ = legislatureFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			LegDescripcion: new FormControl('', [Validators.required])
		});
	}

	get LegDescripcion() {
		return this.formCreate.get('LegDescripcion')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		const createLegislatureDto: CreateLegislatureDto = {
			LegDescripcion: this.LegDescripcion.value
		};

		this.legislatureFacade.create(createLegislatureDto);
		this.closeDialog(this.legislatureFacade.createResponse$, this.dialogRef);
	}
}
