import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './user.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { UserService } from '../services/user.service';
import { UpdateUserDto, CreateUserDto, User } from '../entities/models/user.model';

@Injectable()
export class UserEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly userService: UserService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.USER_CREATE_REQUESTED),
				switchMap((action: Payload<CreateUserDto>) =>
					this.userService.create(action.payload).pipe(
						map((response: Response<User>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.USER_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.USER_CREATE_FAILED({
									payload: exception
								})
							);
						})
					)
				)
			)
	);

	findAll$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.USER_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.userService.findAll(action.payload).pipe(
						map((response: Response<User[]>) => {
							return zActions.USER_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.USER_FIND_ALL_FAILED({
									payload: exception
								})
							)
						)
					)
				)
			)
	);

	update$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.USER_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateUserDto | CreateUserDto, string>) => {
					return this.userService.update(action.id || '', action.payload).pipe(
						map((response: Response<User>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.USER_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.USER_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
