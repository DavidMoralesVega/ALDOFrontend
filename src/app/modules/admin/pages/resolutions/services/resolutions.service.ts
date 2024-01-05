import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import {
	CreateResolutionDto,
	Resolution,
	UpdateResolutionDto
} from '../entities/models/resolutions.model';

@Injectable()
export class ResolutionService {
	private readonly ZPResolution: string = environment.zephyrus.resolutions;

	constructor(private readonly httpClient: HttpClient) {}

	create(creaatResolutionDto: CreateResolutionDto): Observable<Response<Resolution>> {
		return this.httpClient.post<Response<Resolution>>(this.ZPResolution, creaatResolutionDto);
	}

	findAll(pagination: Pagination): Observable<Response<Resolution[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Resolution[]>>(
			`${this.ZPResolution}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Resolution>> {
		return this.httpClient.get<Response<Resolution>>(`${this.ZPResolution}/${id}`);
	}

	update(
		id: string,
		updateResolutionDto: UpdateResolutionDto | CreateResolutionDto
	): Observable<Response<Resolution>> {
		return this.httpClient.patch<Response<Resolution>>(
			`${this.ZPResolution}/${id}`,
			updateResolutionDto
		);
	}
}
