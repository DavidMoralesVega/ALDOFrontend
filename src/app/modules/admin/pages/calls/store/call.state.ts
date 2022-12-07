import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Call, CreateCallDto, UpdateCallDto } from '../entities';

export interface CallState {
	create: {
		createCallDto: CreateCallDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Call> | null;
	};
	findAll: {
		response: Response<Call[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Call> | null;
		id: string | null;
	};
	update: {
		updateCallDto: UpdateCallDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Call> | null;
	};
}

export const callInitialState: CallState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createCallDto: null,
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
		updateCallDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
