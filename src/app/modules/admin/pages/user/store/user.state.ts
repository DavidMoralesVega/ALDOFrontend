import { Exception, Pagination, Response } from 'src/app/core/entities';
import { User, CreateUserDto, UpdateUserDto } from '../entities/models/user.model';

export interface UserState {
	create: {
		createUserDto: CreateUserDto | null;
		exception: Exception | null;
		isLoading: boolean;
		response: Response<User> | null;
	};
	findAll: {
		response: Response<User[]> | null;
		exception: Exception | null;
		isLoading: boolean;
		pagination: Pagination | null;
	};
	update: {
		updateUserDto: UpdateUserDto | CreateUserDto | null;
		exception: Exception | null;
		id: string | undefined;
		isLoading: boolean;
		response: Response<User> | null;
	};
}

export const userInitialState: UserState = {
	findAll: {
		response: null,
		exception: null,
		isLoading: false,
		pagination: null
	},
	create: {
		createUserDto: null,
		exception: null,
		isLoading: false,
		response: null
	},
	update: {
		updateUserDto: null,
		exception: null,
		id: undefined,
		isLoading: false,
		response: null
	}
};
