import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { LoginUserDto, UserTokenDto } from '../pages/auth-user/entities/models/user.model';
import { LoginUserERPDto, UserERPTokenDto } from '../pages/auth-erp/entities/models/user-erp.model';
import { ETypeUser } from '../entities';

@Injectable()
export class AuthService {
	private readonly ZPAuthUser: string = environment.zephyrus.auth;
	constructor(private readonly httpClient: HttpClient) {}

	login(loginDto: LoginUserDto, typeUser: ETypeUser): Observable<Response<UserTokenDto>> {
		return this.httpClient.post<Response<UserTokenDto>>(`${this.ZPAuthUser}/login`, loginDto);
	}

	checkAuthStatus(typeUser: ETypeUser | undefined): Observable<Response<UserTokenDto>> {
		return this.httpClient.get<Response<UserTokenDto>>(`${this.ZPAuthUser}/check-status`);
	}
}
