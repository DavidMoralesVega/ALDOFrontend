import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginUserERPDto } from '../entities';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { AuthFacade } from '../../../facades/auth.facade';
import { ETypeUser } from '../../../entities';

@Component({
	selector: 'z-auth-erp',
	templateUrl: './auth-erp.component.html',
	styleUrls: ['./auth-erp.component.scss']
})
export class AuthErpComponent implements OnInit {
	public formLogin: FormGroup = new FormGroup({});
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();

	public readonly loginIsLoading$: Observable<boolean>;
	public visibility: boolean = true;

	constructor(private readonly authFacade: AuthFacade) {
		this.loginIsLoading$ = this.authFacade.loginIsLoading$;
	}

	ngOnInit(): void {
		this.initFormLogin();
	}

	initFormLogin(): void {
		this.formLogin = new FormGroup({
			erp_cuenta: new FormControl('admin_erp1', [Validators.required]),
			erp_clave: new FormControl('Hola1s$sdb', [Validators.required])
		});
	}

	get erp_cuenta() {
		return this.formLogin.get('erp_cuenta')!;
	}

	get erp_clave() {
		return this.formLogin.get('erp_clave')!;
	}

	create() {
		if (this.formLogin.invalid) return;

		const loginUserERPDto: LoginUserERPDto = {
			erp_cuenta: this.formLogin.value.erp_cuenta,
			erp_clave: this.formLogin.value.erp_clave
		};

		this.authFacade.login(loginUserERPDto, ETypeUser.erp);

		// this.formLogin.reset();
	}
}
