import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { User, UpdateUserDto, CreateUserDto } from '../entities/models/user.model';

@Injectable()
export class UserService {
	private readonly ZPUser: string = environment.zephyrus.user;

	constructor(private readonly httpClient: HttpClient) {}

	create(createUserDto: CreateUserDto): Observable<Response<User>> {
		return this.httpClient.post<Response<User>>(`${this.ZPUser}/create`, createUserDto);
	}

	findAll(pagination: Pagination): Observable<Response<User[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<User[]>>(
			`${this.ZPUser}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	update(id: string, updateUserDto: UpdateUserDto | CreateUserDto): Observable<Response<User>> {
		return this.httpClient.patch<Response<User>>(`${this.ZPUser}/${id}`, updateUserDto);
	}
}
