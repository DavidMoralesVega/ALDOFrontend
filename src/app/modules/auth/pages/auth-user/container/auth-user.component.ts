import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../../facades/auth.facade';
import { LoginUserDto } from '../entities/models/user.model';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ETypeUser } from '../../../entities';

@Component({
	selector: 'z-auth-user',
	templateUrl: './auth-user.component.html',
	styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public visibility: boolean = true;

	public formLogin: FormGroup = new FormGroup({});

	public readonly loginIsLoading$: Observable<boolean>;

	constructor(private readonly authFacade: AuthFacade) {
		this.loginIsLoading$ = this.authFacade.loginIsLoading$;
	}

	ngOnInit(): void {
		this.initFormCreate();
	}

	initFormCreate(): void {
		this.formLogin = new FormGroup({
			Email: new FormControl('prueba@gmail.com', [Validators.required]),
			Password: new FormControl('R2oberts$', [Validators.required])
		});
	}

	get Email() {
		return this.formLogin.get('Email')!;
	}

	get Password() {
		return this.formLogin.get('Password')!;
	}

	create() {
		if (this.formLogin.invalid) return;

		const loginUserDto: LoginUserDto = {
			Email: this.Email.value,
			Password: this.Password.value
		};

		this.authFacade.login(loginUserDto, ETypeUser.user);

		// this.formCreate.reset();
	}
}
