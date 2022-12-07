import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Resolution, UpdateResolutionDto } from '../entities/models/resolutions.model';

export interface ResolutionState {
	create: {
		createResolutionDto: FormData | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Resolution> | null;
	};
	findAll: {
		response: Response<Resolution[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Resolution> | null;
		id: string | null;
	};
	update: {
		updateResolutionDto: UpdateResolutionDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Resolution> | null;
	};
}

export const resolutionInitialState: ResolutionState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createResolutionDto: null,
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
		updateResolutionDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
