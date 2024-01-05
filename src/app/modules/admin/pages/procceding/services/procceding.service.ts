import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { CreateProccedingDto, Procceding, UpdateProccedingDto } from '../entities';

@Injectable()
export class ProccedingService {
	private readonly ZPProcceding: string = environment.zephyrus.proceeding;

	constructor(private readonly httpClient: HttpClient) {}

	create(createProccedingDto: CreateProccedingDto): Observable<Response<Procceding>> {
		return this.httpClient.post<Response<Procceding>>(this.ZPProcceding, createProccedingDto);
	}

	findAll(pagination: Pagination): Observable<Response<Procceding[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Procceding[]>>(
			`${this.ZPProcceding}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Procceding>> {
		return this.httpClient.get<Response<Procceding>>(`${this.ZPProcceding}/${id}`);
	}

	update(
		id: string,
		updateProccedingDto: UpdateProccedingDto | FormData
	): Observable<Response<Procceding>> {
		return this.httpClient.patch<Response<Procceding>>(
			`${this.ZPProcceding}/${id}`,
			updateProccedingDto
		);
	}
}
