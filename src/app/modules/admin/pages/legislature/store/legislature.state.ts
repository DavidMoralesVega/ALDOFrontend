import { Exception, Pagination, Response } from 'src/app/core/entities';
import {
	Legislature,
	CreateLegislatureDto,
	UpdateLegislatureDto,
	LegislatureAdapter
} from '../entities';

export interface LegislatureState {
	create: {
		createLegislatureDto: CreateLegislatureDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Legislature> | null;
	};
	findAll: {
		response: Response<LegislatureAdapter[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Legislature> | null;
		id: string | null;
	};
	update: {
		updateLegislatureDto: UpdateLegislatureDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Legislature> | null;
	};
}

export const legislatureInitialState: LegislatureState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createLegislatureDto: null,
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
		updateLegislatureDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
