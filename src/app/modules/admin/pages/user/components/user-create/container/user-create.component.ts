import { Component, OnInit } from '@angular/core';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ZListRoles } from 'src/app/core/entities';
import { UserFacade } from '../../../facades/user.facade';
import { CreateUserDto } from '../../../entities/models/user.model';

@Component({
	selector: 'z-user-create',
	templateUrl: './user-create.component.html',
	styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public formCreate: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	public ZListRoles: any[] = ZListRoles;

	constructor(private readonly userFacade: UserFacade) {
		this.createIsLoading$ = userFacade.createIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formCreate = new FormGroup({
			Email: new FormControl('', []),
			Password: new FormControl('', []),
			FullName: new FormControl('', []),
			Roles: new FormControl('', [])
		});
	}

	get Email() {
		return this.formCreate.get('Email')!;
	}
	get Password() {
		return this.formCreate.get('Password')!;
	}
	get FullName() {
		return this.formCreate.get('FullName')!;
	}
	get Roles() {
		return this.formCreate.get('Roles')!;
	}

	create() {
		if (this.formCreate.invalid) return;

		const createUserDto: CreateUserDto = {
			Email: this.Email.value,
			FullName: this.FullName.value,
			Password: this.Password.value,
			Roles: [this.Roles.value]
		};

		console.log(createUserDto);

		this.userFacade.create(createUserDto);
	}
}
