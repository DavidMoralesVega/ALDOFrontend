import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { LoginUserDto, UserTokenDto, User } from '../pages/auth-user/entities/models/user.model';
import {
	LoginUserERPDto,
	UserERPTokenDto,
	UserERP
} from '../pages/auth-erp/entities/models/user-erp.model';
import { ETypeUser } from '../entities';

@Injectable()
export class AuthService {
	private readonly ZPAuthUser: string = environment.zephyrus.auth;

	constructor(private readonly httpClient: HttpClient) {}

	// create(createUserDto: CreateUserDto): Observable<Response<User>> {
	// 	return this.httpClient.post<Response<User>>(`${this.ZPAuthUser}/create`, createUserDto);
	// }

	login(
		loginDto: LoginUserDto | LoginUserERPDto,
		typeUser: ETypeUser
	): Observable<Response<UserTokenDto | UserERPTokenDto>> {
		if (typeUser === ETypeUser.erp) {
			// return this.httpClient.post<Response<UserERPTokenDto>>(
			// 	`${this.ZPAuthERP}/login`,
			// 	loginDto
			// );
		} else {
		}
		return this.httpClient.post<Response<UserTokenDto>>(`${this.ZPAuthUser}/login`, loginDto);
	}

	checkAuthStatus(
		typeUser: ETypeUser | undefined
	): Observable<Response<UserTokenDto | UserERPTokenDto>> {
		if (typeUser === ETypeUser.erp) {
			// return this.httpClient.get<Response<UserERPTokenDto>>(`${this.ZPAuthERP}/check-status`);
		} else {
		}
		return this.httpClient.get<Response<UserTokenDto>>(`${this.ZPAuthUser}/check-status`);
	}
}
