import { Exception, Pagination, Response } from 'src/app/core/entities';
import { RequestWritten } from '../entities';
import {
	CreateRequestWrittenDto,
	UpdateRequestWrittenDto
} from '../entities/models/request-written.model';

export interface RequestWrittenState {
	create: {
		createRequestWrittenDto: CreateRequestWrittenDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<RequestWritten> | null;
	};
	findAll: {
		response: Response<RequestWritten[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<RequestWritten> | null;
		id: string | null;
	};
	update: {
		updateRequestWrittenDto: UpdateRequestWrittenDto | CreateRequestWrittenDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<RequestWritten> | null;
	};
}

export const requestWrittenInitialState: RequestWrittenState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createRequestWrittenDto: null,
		exception: null,
		isLoading: false,
		response: null
	},
	findOne: {
		exception: null,
		isLoading: false,
		response: null,
		id: null
	},
	update: {
		updateRequestWrittenDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
