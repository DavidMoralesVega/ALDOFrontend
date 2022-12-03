import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { ETypeUser } from '../../../../entities/enums/type-user';

class UserERPAdapter {
	constructor(
		public readonly erp_id: string,
		public readonly erp_cuenta: string,
		public readonly erp_clave: string,
		public readonly erp_estado: boolean
	) {}
}

export type CreateUserERPDto = Omit<UserERPAdapter, 'erp_id'>;
export type UpdateUserERPDto = Omit<Partial<UserERPAdapter>, 'erp_id'>;
export type LoginUserERPDto = Omit<UserERPAdapter, 'erp_id' | 'erp_estado'>;

export interface UserERPTokenDto extends UserERPAdapter {
	readonly token: string;
	readonly TypeUser: ETypeUser;
}

@Injectable()
export class UserERP implements Adapter<UserERPAdapter> {
	adapter(userERP: UserERPAdapter): UserERPAdapter {
		return new UserERPAdapter(
			userERP.erp_id,
			userERP.erp_cuenta,
			userERP.erp_clave,
			userERP.erp_estado
		);
	}
}
