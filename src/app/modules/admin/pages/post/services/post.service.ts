import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { CreatePostDto, UpdatePostDto, Post } from '../entities';

@Injectable()
export class PostService {
	private readonly ZPPost: string = environment.zephyrus.post;

	constructor(private readonly httpClient: HttpClient) {}

	create(createPostDto: FormData): Observable<Response<Post>> {
		return this.httpClient.post<Response<Post>>(this.ZPPost, createPostDto);
	}

	findAll(pagination: Pagination): Observable<Response<Post[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Post[]>>(
			`${this.ZPPost}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Post>> {
		return this.httpClient.get<Response<Post>>(`${this.ZPPost}/${id}`);
	}

	update(id: string, updatePostDto: UpdatePostDto): Observable<Response<Post>> {
		return this.httpClient.patch<Response<Post>>(`${this.ZPPost}/${id}`, updatePostDto);
	}
}
