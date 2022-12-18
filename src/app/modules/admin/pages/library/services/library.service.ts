import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { Library, UpdateLibraryDto } from '../entities/models/library.model';
import { SearchLibrary } from '../../../../../core/entities/interfaces/searchLibrary.interface';

@Injectable()
export class LibraryService {
	private readonly ZPLibrary: string = environment.zephyrus.library;

	constructor(private readonly httpClient: HttpClient) {}

	create(createLibraryDto: FormData): Observable<Response<Library>> {
		return this.httpClient.post<Response<Library>>(this.ZPLibrary, createLibraryDto);
	}

	findAll(pagination: Pagination): Observable<Response<Library[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<Library[]>>(
			`${this.ZPLibrary}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<Library>> {
		return this.httpClient.get<Response<Library>>(`${this.ZPLibrary}/${id}`);
	}

	update(id: string, updateLibraryDto: UpdateLibraryDto): Observable<Response<Library>> {
		return this.httpClient.patch<Response<Library>>(`${this.ZPLibrary}/${id}`, updateLibraryDto);
	}

	search(searchLibrary: SearchLibrary): Observable<Response<Library[]>> {
		return this.httpClient.post<Response<Library[]>>(`${this.ZPLibrary}/search`, searchLibrary);
	}
}
