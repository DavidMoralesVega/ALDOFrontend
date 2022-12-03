import { Exception, Response } from 'src/app/core/entities';
import { LoginUserDto, UserTokenDto } from '../pages/auth-user/entities/models/user.model';
import { LoginUserERPDto, UserERPTokenDto } from '../pages/auth-erp/entities/models/user-erp.model';
import { ETypeUser } from '../entities/enums/type-user';

export interface AuthState {
	login: {
		exception: Exception | null;
		isLoading: boolean;
		isLoggedIn: boolean;
		loginDto: LoginUserDto | LoginUserERPDto | null;
		type: ETypeUser | null;
		response: Response<UserTokenDto | UserERPTokenDto> | null;
	};
}

export const authInitialState: AuthState = {
	login: {
		exception: null,
		isLoading: false,
		isLoggedIn: false,
		loginDto: null,
		type: null,
		response: null
	}
};
