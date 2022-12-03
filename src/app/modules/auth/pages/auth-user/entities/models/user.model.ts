import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';
import { ETypeUser } from '../../../../entities/enums/type-user';

export class UserAdapter {
	constructor(
		public readonly usr_id: string,
		public readonly usr_cuenta: string,
		public readonly usr_correo: string,
		public readonly usr_clave: string,
		public readonly usr_fecha: string,
		public readonly usr_clave1: string,
		public readonly usr_fecha1: string,
		public readonly usr_clave2: string,
		public readonly usr_fecha2: string,
		public readonly usr_documento: string,
		public readonly usr_estado: boolean,
		public readonly usr_creado: string
	) {}
}

export type CreateUserDto = Omit<
	UserAdapter,
	'usr_id' | 'usr_clave1' | 'usr_fecha1' | 'usr_clave2' | 'usr_fecha2'
>;
export type UpdateUserDto = Omit<Partial<UserAdapter>, 'usr_id'>;

export interface LoginUserDto {
	usr_cuenta: string;
	usr_clave: string;
}

export interface UserTokenDto extends UserAdapter {
	readonly token: string;
	readonly TypeUser: ETypeUser;
}

@Injectable()
export class User implements Adapter<UserAdapter> {
	adapter(user: UserAdapter): UserAdapter {
		return new UserAdapter(
			user.usr_id,
			user.usr_cuenta,
			user.usr_correo,
			user.usr_clave,
			user.usr_fecha,
			user.usr_clave1,
			user.usr_fecha1,
			user.usr_clave2,
			user.usr_fecha2,
			user.usr_documento,
			user.usr_estado,
			user.usr_creado
		);
	}
}
