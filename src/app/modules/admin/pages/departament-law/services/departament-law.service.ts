import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { search } from '../../../../../core/entities/interfaces/search.interface';
import {
	CreateDepartamentLawDto,
	DepartamentLaw,
	UpdateDepartamentLawDto
} from '../entities/models/departament-law.model';

@Injectable()
export class DepartamentLawService {
	private readonly ZPDepartamentLaw: string = environment.zephyrus.departamentLaw;

	constructor(private readonly httpClient: HttpClient) {}

	create(createDepartamentLawDto: FormData): Observable<Response<DepartamentLaw>> {
		return this.httpClient.post<Response<DepartamentLaw>>(
			this.ZPDepartamentLaw,
			createDepartamentLawDto
		);
	}

	findAll(pagination: Pagination): Observable<Response<DepartamentLaw[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<DepartamentLaw[]>>(
			`${this.ZPDepartamentLaw}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<DepartamentLaw>> {
		return this.httpClient.get<Response<DepartamentLaw>>(`${this.ZPDepartamentLaw}/${id}`);
	}

	update(
		id: string,
		updateDepartamentLawDto: UpdateDepartamentLawDto
	): Observable<Response<DepartamentLaw>> {
		return this.httpClient.patch<Response<DepartamentLaw>>(
			`${this.ZPDepartamentLaw}/${id}`,
			updateDepartamentLawDto
		);
	}

	search(search: search): Observable<Response<DepartamentLaw[]>> {
		return this.httpClient.post<Response<DepartamentLaw[]>>(
			`${this.ZPDepartamentLaw}/search`,
			search
		);
	}

	searchAdvanced(search: search): Observable<Response<DepartamentLaw[]>> {
		return this.httpClient.post<Response<DepartamentLaw[]>>(
			`${this.ZPDepartamentLaw}/searchAdvanced`,
			search
		);
	}
}
