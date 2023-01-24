import { Exception, Pagination, Response } from 'src/app/core/entities';
import { RequestReports, CreateRequestReportsDto, UpdateRequestReportsDto } from '../entities';

export interface RequestReportsState {
	create: {
		createRequestReportsDto: FormData | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<RequestReports> | null;
	};
	findAll: {
		response: Response<RequestReports[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<RequestReports> | null;
		id: string | null;
	};
	update: {
		updateRequestReportsDto: FormData | UpdateRequestReportsDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<RequestReports> | null;
	};
}

export const requestReportsInitialState: RequestReportsState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createRequestReportsDto: null,
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
		updateRequestReportsDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
