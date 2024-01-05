import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Contract, CreateContractDto, UpdateContractDto } from '../entities';

@Injectable()
export class ContractService {
	private readonly ZPContract: string = environment.zephyrus.contract;

	constructor(private readonly httpClient: HttpClient) {}

	create(createContractDto: CreateContractDto): Observable<Response<Contract>> {
		return this.httpClient.post<Response<Contract>>(this.ZPContract, createContractDto);
	}

	findAll(pagination: Pagination): Observable<Response<Contract[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Contract[]>>(
			`${this.ZPContract}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Contract>> {
		return this.httpClient.get<Response<Contract>>(`${this.ZPContract}/${id}`);
	}

	update(
		id: string,
		updateContractDto: UpdateContractDto | FormData
	): Observable<Response<Contract>> {
		return this.httpClient.patch<Response<Contract>>(
			`${this.ZPContract}/${id}`,
			updateContractDto
		);
	}
}
