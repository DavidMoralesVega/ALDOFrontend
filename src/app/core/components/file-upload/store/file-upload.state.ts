import { getResponseIS } from 'src/app/core/ngrx/initial.state';
import { ZUpload } from '../models/file-upload.model';
import { ZI_Response } from 'src/app/core/entities';

export interface ZUploadStateCreate {
	createFileUploadDto: FormData;
	exception: undefined;
	isLoading: boolean;
	response: ZI_Response<ZUpload>;
}

export interface ZUploadStateRemove {
	paths: string[];
	response: ZI_Response<ZUpload>;
	exception: undefined;
	isLoading: boolean;
}

export interface ZUploadState {
	create: ZUploadStateCreate;
	remove: ZUploadStateRemove;
}

export const ZUploadInitialState: ZUploadState = {
	create: {
		createFileUploadDto: new FormData(),
		exception: undefined,
		isLoading: false,
		response: getResponseIS<ZUpload>(new ZUpload())
	},
	remove: {
		paths: [],
		response: getResponseIS<ZUpload>(new ZUpload()),
		exception: undefined,
		isLoading: false
	}
};
