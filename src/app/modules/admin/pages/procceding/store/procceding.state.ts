import { Exception, Pagination, Response } from 'src/app/core/entities';
import { CreateProccedingDto, Procceding, UpdateProccedingDto } from '../entities';

export interface ProccedingState {
	create: {
		createProccedingDto: CreateProccedingDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Procceding> | null;
	};
	findAll: {
		response: Response<Procceding[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Procceding> | null;
		id: string | null;
	};
	update: {
		updateProccedingDto: UpdateProccedingDto | FormData | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Procceding> | null;
	};
}

export const proccedingInitialState: ProccedingState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createProccedingDto: null,
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
		updateProccedingDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
