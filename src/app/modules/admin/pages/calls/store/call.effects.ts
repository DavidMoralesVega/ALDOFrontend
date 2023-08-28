import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './call.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { CallService } from '../services/call.service';
import { Call, CreateCallDto, UpdateCallDto } from '../entities/models/call.model';
import {} from '../services/call.service';

@Injectable()
export class CallEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly callService: CallService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.CALL_CREATE_REQUESTED),
				switchMap((action: Payload<CreateCallDto>) =>
					this.callService.create(action.payload).pipe(
						map((response: Response<Call>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CALL_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CALL_CREATE_FAILED({
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
				ofType(zActions.CALL_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.callService.findAll(action.payload).pipe(
						map((response: Response<Call[]>) => {
							return zActions.CALL_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.CALL_FIND_ALL_FAILED({
									payload: exception
								})
							)
						)
					)
				)
			)
	);

	findOne$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.CALL_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.callService.findOne(action.payload).pipe(
						map((response: Response<Call>) =>
							zActions.CALL_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.CALL_FIND_ONE_FAILED({
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
				ofType(zActions.CALL_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateCallDto | CreateCallDto, string>) => {
					return this.callService.update(action.id || '', action.payload).pipe(
						map((response: Response<Call>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CALL_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CALL_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
