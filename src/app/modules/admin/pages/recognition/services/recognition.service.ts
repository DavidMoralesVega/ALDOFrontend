import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Recognition, UpdateRecognitionDto } from '../entities';

@Injectable()
export class RecognitionService {
	private readonly ZPRecognition: string = environment.zephyrus.recognition;

	constructor(private readonly httpClient: HttpClient) {}

	create(createRecognitionDto: FormData): Observable<Response<Recognition>> {
		return this.httpClient.post<Response<Recognition>>(this.ZPRecognition, createRecognitionDto);
	}

	findAll(pagination: Pagination): Observable<Response<Recognition[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Recognition[]>>(
			`${this.ZPRecognition}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Recognition>> {
		return this.httpClient.get<Response<Recognition>>(`${this.ZPRecognition}/${id}`);
	}

	update(
		id: string,
		updateRecognitionDto: UpdateRecognitionDto | FormData
	): Observable<Response<Recognition>> {
		return this.httpClient.patch<Response<Recognition>>(
			`${this.ZPRecognition}/${id}`,
			updateRecognitionDto
		);
	}
}
