import { Exception, Pagination, Response } from 'src/app/core/entities';
import { search } from 'src/app/core/entities/interfaces/search.interface';
import { DepartamentLaw } from '../entities';
import {
	CreateDepartamentLawDto,
	DepartamentLawAdapter,
	UpdateDepartamentLawDto
} from '../entities/models/departament-law.model';

export interface DepartamentLawState {
	create: {
		createDepartamentLawDto: CreateDepartamentLawDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<DepartamentLaw> | null;
	};
	findAll: {
		response: Response<DepartamentLawAdapter[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<DepartamentLaw> | null;
		id: string | null;
	};
	update: {
		updateDepartamentLawDto: CreateDepartamentLawDto | null | UpdateDepartamentLawDto;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<DepartamentLaw> | null;
	};
	search: {
		response: Response<DepartamentLaw[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		search: search | null;
	};
	searchAdvanced: {
		response: Response<DepartamentLaw[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		search: search | null;
	};
}

export const departamentLawInitialState: DepartamentLawState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createDepartamentLawDto: null,
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
		updateDepartamentLawDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	},
	search: {
		response: null,
		exception: null,
		isLoading: false,
		search: null
	},
	searchAdvanced: {
		response: null,
		exception: null,
		isLoading: false,
		search: null
	}
};
