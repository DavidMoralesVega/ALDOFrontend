import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Recognition, UpdateRecognitionDto } from '../entities';

export interface RecognitionState {
	create: {
		createRecognitionDto: FormData | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Recognition> | null;
	};
	findAll: {
		response: Response<Recognition[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<Recognition> | null;
		id: string | null;
	};
	update: {
		updateRecognitionDto: UpdateRecognitionDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<Recognition> | null;
	};
}

export const recognitionInitialState: RecognitionState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createRecognitionDto: null,
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
		updateRecognitionDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
