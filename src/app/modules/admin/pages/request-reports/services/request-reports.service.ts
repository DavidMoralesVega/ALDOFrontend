import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { RequestReports, CreateRequestReportsDto, UpdateRequestReportsDto } from '../entities';

@Injectable()
export class RequestReportsService {
	private readonly ZPRequestReports: string = environment.zephyrus.requestReports;

	constructor(private readonly httpClient: HttpClient) {}

	create(createRequestReportsDto: FormData): Observable<Response<RequestReports>> {
		return this.httpClient.post<Response<RequestReports>>(
			this.ZPRequestReports,
			createRequestReportsDto
		);
	}

	findAll(pagination: Pagination): Observable<Response<RequestReports[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<RequestReports[]>>(
			`${this.ZPRequestReports}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<RequestReports>> {
		return this.httpClient.get<Response<RequestReports>>(`${this.ZPRequestReports}/${id}`);
	}

	update(
		id: string,
		updateRequestReportsDto: UpdateRequestReportsDto
	): Observable<Response<RequestReports>> {
		return this.httpClient.patch<Response<RequestReports>>(
			`${this.ZPRequestReports}/${id}`,
			updateRequestReportsDto
		);
	}
}
