import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { CreateAdmPaisDto } from '../entities';
import { AdmPais, UpdateAdmPaisDto } from '../entities/models/adm-pais.model';

@Injectable()
export class AdmPaisService {
	private readonly ZPAdmPais: string = environment.zephyrus.adsi.adm_pais;

	constructor(private readonly httpClient: HttpClient) {}

	create(createAdmPaisDto: CreateAdmPaisDto): Observable<Response<AdmPais>> {
		return this.httpClient.post<Response<AdmPais>>(this.ZPAdmPais, createAdmPaisDto);
	}

	findAll(pagination: Pagination): Observable<Response<AdmPais[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<AdmPais[]>>(
			`${this.ZPAdmPais}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<AdmPais>> {
		return this.httpClient.get<Response<AdmPais>>(`${this.ZPAdmPais}/${id}`);
	}

	update(id: string, updateAdmPaisDto: UpdateAdmPaisDto): Observable<Response<AdmPais>> {
		return this.httpClient.patch<Response<AdmPais>>(`${this.ZPAdmPais}/${id}`, updateAdmPaisDto);
	}
}
