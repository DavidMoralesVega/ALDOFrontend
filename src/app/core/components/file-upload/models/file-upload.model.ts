import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities';

export class ZUploadAdapter {
	constructor(public readonly paths: string[]) {}
}

export interface CreateFileUploadDto {
	files?: any[];
	directory: string;
	maxSize: string;
	acceptedExtensions: string;
	multiple: boolean;
}

/* export interface CreateAdmGestionDto
	extends Omit<ZUpload, 'gtn_id'> {} */

@Injectable()
export class ZUpload implements Adapter<ZUploadAdapter> {
	adapter(zUploadAdapter: ZUploadAdapter): ZUploadAdapter {
		return new ZUploadAdapter(zUploadAdapter.paths);
	}
}

export class FileUpload {
	key!: string;
	name!: string;
	url!: string;
	file: File;

	constructor(file: File) {
		this.file = file;
	}
}
