import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { Observable } from 'rxjs';
import { CreateLegislatureDto } from '../../../entities';
import { LegislatureFacade } from '../../../facades/legislature.facade';

@Component({
	selector: 'z-legislature-create',
	templateUrl: './legislature-create.component.html',
	styleUrls: ['./legislature-create.component.scss']
})
export class LegislatureCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;

	constructor(private readonly legislatureFacade: LegislatureFacade) {
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
	}
}
