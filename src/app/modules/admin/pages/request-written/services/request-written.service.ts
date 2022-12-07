import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { RequestWritten } from '../entities';
import { UpdateRequestWrittenDto } from '../entities/models/request-written.model';

@Injectable()
export class RequestWrittenService {
	private readonly ZPRequestWritten: string = environment.zephyrus.requestWritten;

	constructor(private readonly httpClient: HttpClient) {}

	create(createRequestWrittenDto: FormData): Observable<Response<RequestWritten>> {
		return this.httpClient.post<Response<RequestWritten>>(
			this.ZPRequestWritten,
			createRequestWrittenDto
		);
	}

	findAll(pagination: Pagination): Observable<Response<RequestWritten[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<RequestWritten[]>>(
			`${this.ZPRequestWritten}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<RequestWritten>> {
		return this.httpClient.get<Response<RequestWritten>>(`${this.ZPRequestWritten}/${id}`);
	}

	update(
		id: string,
		updateRequestWrittenDto: UpdateRequestWrittenDto
	): Observable<Response<RequestWritten>> {
		return this.httpClient.patch<Response<RequestWritten>>(
			`${this.ZPRequestWritten}/${id}`,
			updateRequestWrittenDto
		);
	}
}
