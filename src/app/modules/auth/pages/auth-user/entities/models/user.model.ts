import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { ETypeUser } from '../../../../entities/enums/type-user';

export class UserAdapter {
	constructor(
		public readonly IdUser: string,
		public readonly Email: string,
		public readonly Password: string,
		public readonly FullName: string,
		public readonly IsActive: boolean,
		public readonly Roles: string
	) {}
}

export type CreateUserDto = Omit<UserAdapter, 'IdUser'>;
export type UpdateUserDto = Omit<Partial<UserAdapter>, 'IdUser'>;

export interface LoginUserDto {
	Email: string;
	Password: string;
}

export interface UserTokenDto extends UserAdapter {
	readonly token: string;
	readonly TypeUser: ETypeUser;
}

@Injectable()
export class User implements Adapter<UserAdapter> {
	adapter(user: UserAdapter): UserAdapter {
		return new UserAdapter(
			user.IdUser,
			user.Email,
			user.Password,
			user.FullName,
			user.IsActive,
			user.Roles
		);
	}
}
