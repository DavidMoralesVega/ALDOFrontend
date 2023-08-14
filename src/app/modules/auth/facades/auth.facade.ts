import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exception, Response } from 'src/app/core/entities';
import * as zSelector from '../../auth/store/auth.selectors';
import { AuthState } from '../store/auth.state';
import { LoginUserERPDto, UserERPTokenDto } from '../pages/auth-erp/entities/models/user-erp.model';
import { LOGIN_REQUESTED, LOGOUT_REQUESTED, GET_AUTH } from '../store/auth.action';
import { ETypeUser } from '../entities/enums/type-user';
import { LoginUserDto, UserTokenDto } from '../pages/auth-user/entities/models/user.model';

@Injectable()
export class AuthFacade {
	// login
	public loginDto$: Observable<LoginUserDto | LoginUserERPDto | null>;
	public loginException$: Observable<Exception | null>;
	public loginIsLoading$: Observable<boolean>;
	public loginIsLoggedIn$: Observable<boolean>;
	public loginResponse$: Observable<Response<UserTokenDto> | null>;

	constructor(private readonly store: Store<AuthState>) {
		// login
		this.loginDto$ = this.store.select(zSelector.getAuthLoginDto);
		this.loginException$ = this.store.select(zSelector.getAuthLoginException);
		this.loginIsLoading$ = this.store.select(zSelector.getAuthLoginIsLoading);
		this.loginIsLoggedIn$ = this.store.select(zSelector.getAuthLoginIsLoggedIn);
		this.loginResponse$ = this.store.select(zSelector.getAuthLoginResponse);
	}

	login(loginDto: LoginUserDto, typeUser: ETypeUser) {
		this.store.dispatch(LOGIN_REQUESTED({ payload: loginDto, t: typeUser }));
	}

	logout() {
		this.store.dispatch(LOGOUT_REQUESTED());
	}

	getUser(typeUser: ETypeUser) {
		this.store.dispatch(GET_AUTH({ payload: typeUser }));
	}
}
