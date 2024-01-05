import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/entities';
import { Pagination } from 'src/app/core/entities/interfaces/pagination.interface';
import { FilesArchive } from '../entities';
import {
	CreateFilesArchiveDto,
	UpdateFilesArchiveDto
} from '../entities/models/file-archive.model';

@Injectable()
export class FilesArchiveService {
	private readonly ZPFilesArchive: string = environment.zephyrus.fileArchive;

	constructor(private readonly httpClient: HttpClient) {}

	create(createFilesArchiveDto: CreateFilesArchiveDto): Observable<Response<FilesArchive>> {
		return this.httpClient.post<Response<FilesArchive>>(
			this.ZPFilesArchive,
			createFilesArchiveDto
		);
	}

	findAll(pagination: Pagination): Observable<Response<FilesArchive[]>> {
		const { limit, offset, filter } = pagination;
		return this.httpClient.get<Response<FilesArchive[]>>(
			`${this.ZPFilesArchive}?limit=${limit}&offset=${offset}&filter=${filter}`
		);
	}

	findOne(id: string): Observable<Response<FilesArchive>> {
		return this.httpClient.get<Response<FilesArchive>>(`${this.ZPFilesArchive}/${id}`);
	}

	update(
		id: string,
		updateFilesArchiveDto: UpdateFilesArchiveDto | FormData
	): Observable<Response<FilesArchive>> {
		return this.httpClient.patch<Response<FilesArchive>>(
			`${this.ZPFilesArchive}/${id}`,
			updateFilesArchiveDto
		);
	}
}
