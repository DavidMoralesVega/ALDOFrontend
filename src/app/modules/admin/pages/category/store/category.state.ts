import { Exception, Pagination, Response } from 'src/app/core/entities';
import { Category, CategoryAdapter, CreateCategoryDto, UpdateCategoryDto } from '../entities';

export interface CategoryState {
	create: {
		createCategoryDto: CreateCategoryDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<CategoryAdapter> | null;
	};
	findAll: {
		response: Response<CategoryAdapter[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	findOne: {
		exception: Exception | null;
		isLoading: boolean;
		response: Response<CategoryAdapter> | null;
		id: string | null;
	};
	update: {
		updateCategoryDto: UpdateCategoryDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<CategoryAdapter> | null;
	};
}

export const categoryInitialState: CategoryState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createCategoryDto: null,
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
		updateCategoryDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
