import { Exception, Pagination, Response } from 'src/app/core/entities';
import { AdmPais, CreateAdmPaisDto, UpdateAdmPaisDto } from '../entities';

export interface AdmPaisState {
	create: {
		createAdmPaisDto: CreateAdmPaisDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<AdmPais> | null;
	};
	findAll: {
		response: Response<AdmPais[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<AdmPais> | null;
		id: string | null;
	};
	update: {
		updateAdmPaisDto: UpdateAdmPaisDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<AdmPais> | null;
	};
}

export const admPaisInitialState: AdmPaisState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createAdmPaisDto: null,
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
		updateAdmPaisDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
