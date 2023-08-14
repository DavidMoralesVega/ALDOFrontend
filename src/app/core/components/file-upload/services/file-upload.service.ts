import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ZUpload } from '../models/file-upload.model';
import { HttpClient } from '@angular/common/http';
import { ZI_Response } from 'src/app/core/entities';

@Injectable()
export class ZUploadService {
	private readonly ZUpload: string = `http://localhost:3000/api/v1/zephyrus-file-upload`;
	private readonly httpClient = inject(HttpClient);

	constructor() {}

	create(createFileUploadDto: FormData): Observable<ZI_Response<ZUpload>> {
		return this.httpClient.post<ZI_Response<ZUpload>>(this.ZUpload, createFileUploadDto);
	}

	remove(paths: string[]): Observable<ZI_Response<ZUpload>> {
		return this.httpClient.post<ZI_Response<ZUpload>>(`${this.ZUpload}/remove`, paths);
	}
}
