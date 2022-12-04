import { Exception, Pagination, Response } from 'src/app/core/entities';
import { DepartamentLaw } from '../entities';
import {
	CreateDepartamentLawDto,
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
		response: Response<DepartamentLaw[]> | null;
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
		updateDepartamentLawDto: UpdateDepartamentLawDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<DepartamentLaw> | null;
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
	}
};
