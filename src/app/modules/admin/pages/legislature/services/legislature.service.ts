import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import {
	CreateLegislatureDto,
	Legislature,
	LegislatureAdapter,
	UpdateLegislatureDto
} from '../entities';

@Injectable()
export class LegislatureService {
	private readonly ZPLegislature: string = environment.zephyrus.legislature;

	constructor(private readonly httpClient: HttpClient) {}

	create(createLegislatureDto: CreateLegislatureDto): Observable<Response<Legislature>> {
		return this.httpClient.post<Response<Legislature>>(this.ZPLegislature, createLegislatureDto);
	}

	findAll(pagination: Pagination): Observable<Response<LegislatureAdapter[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<LegislatureAdapter[]>>(
			`${this.ZPLegislature}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Legislature>> {
		return this.httpClient.get<Response<Legislature>>(`${this.ZPLegislature}/${id}`);
	}

	update(
		id: string,
		updateLegislatureDto: UpdateLegislatureDto
	): Observable<Response<Legislature>> {
		return this.httpClient.patch<Response<Legislature>>(
			`${this.ZPLegislature}/${id}`,
			updateLegislatureDto
		);
	}
}
