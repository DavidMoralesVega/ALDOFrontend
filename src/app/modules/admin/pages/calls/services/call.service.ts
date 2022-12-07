import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Call, CreateCallDto, UpdateCallDto } from '../entities';

@Injectable()
export class CallService {
	private readonly ZPCall: string = environment.zephyrus.call;

	constructor(private readonly httpClient: HttpClient) {}

	create(createCallDto: FormData): Observable<Response<Call>> {
		return this.httpClient.post<Response<Call>>(this.ZPCall, createCallDto);
	}

	findAll(pagination: Pagination): Observable<Response<Call[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Call[]>>(
			`${this.ZPCall}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Call>> {
		return this.httpClient.get<Response<Call>>(`${this.ZPCall}/${id}`);
	}

	update(id: string, updateCallDto: UpdateCallDto): Observable<Response<Call>> {
		return this.httpClient.patch<Response<Call>>(`${this.ZPCall}/${id}`, updateCallDto);
	}
}
