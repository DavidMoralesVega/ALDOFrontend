import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { CreateCategoryDto, UpdateCategoryDto, Category } from '../entities';

@Injectable()
export class CategoryService {
	private readonly ZPCategory: string = environment.zephyrus.category;

	constructor(private readonly httpClient: HttpClient) {}

	create(createCategoryDto: CreateCategoryDto): Observable<Response<Category>> {
		return this.httpClient.post<Response<Category>>(this.ZPCategory, createCategoryDto);
	}

	findAll(pagination: Pagination): Observable<Response<Category[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Category[]>>(
			`${this.ZPCategory}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Category>> {
		return this.httpClient.get<Response<Category>>(`${this.ZPCategory}/${id}`);
	}

	update(id: string, updateCategoryDto: UpdateCategoryDto): Observable<Response<Category>> {
		return this.httpClient.patch<Response<Category>>(
			`${this.ZPCategory}/${id}`,
			updateCategoryDto
		);
	}
}
