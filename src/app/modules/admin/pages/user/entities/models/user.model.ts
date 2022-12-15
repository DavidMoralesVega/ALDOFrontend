import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class UserAdapter {
	constructor(
		public readonly IdUser: string,
		public readonly Email: string,
		public readonly Password: string,
		public readonly FullName: string,
		public readonly IsActive: boolean,
		public readonly Roles: string[]
	) {}
}

export type CreateUserDto = Omit<UserAdapter, 'IdUser' | 'IsActive'>;

export interface UpdateUserDto extends Partial<UserAdapter> {}

@Injectable()
export class User implements Adapter<UserAdapter> {
	adapter(userAdapter: UserAdapter): UserAdapter {
		return new UserAdapter(
			userAdapter.IdUser,
			userAdapter.Email,
			userAdapter.Password,
			userAdapter.FullName,
			userAdapter.IsActive,
			userAdapter.Roles
		);
	}
}
