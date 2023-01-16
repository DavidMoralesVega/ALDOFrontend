import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Contract, UpdateContractDto } from '../entities';

export interface ContractState {
	create: {
		createContractDto: FormData | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Contract> | null;
	};
	findAll: {
		response: Response<Contract[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Contract> | null;
		id: string | null;
	};
	update: {
		updateContractDto: UpdateContractDto | FormData | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Contract> | null;
	};
}

export const contractInitialState: ContractState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createContractDto: null,
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
		updateContractDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
