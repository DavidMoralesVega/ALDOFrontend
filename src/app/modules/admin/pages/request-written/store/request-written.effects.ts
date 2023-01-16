import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './request-written.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { RequestWrittenService } from '../services/request-written.service';
import { RequestWritten, UpdateRequestWrittenDto } from '../entities/models/request-written.model';

@Injectable()
export class RequestWrittenEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly requestWrittenService: RequestWrittenService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.REQUESTWRITTEN_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.requestWrittenService.create(action.payload).pipe(
						map((response: Response<RequestWritten>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.REQUESTWRITTEN_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.REQUESTWRITTEN_CREATE_FAILED({
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
				ofType(zActions.REQUESTWRITTEN_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.requestWrittenService.findAll(action.payload).pipe(
						map((response: Response<RequestWritten[]>) => {
							return zActions.REQUESTWRITTEN_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.REQUESTWRITTEN_FIND_ALL_FAILED({
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
				ofType(zActions.REQUESTWRITTEN_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.requestWrittenService.findOne(action.payload).pipe(
						map((response: Response<RequestWritten>) =>
							zActions.REQUESTWRITTEN_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.REQUESTWRITTEN_FIND_ONE_FAILED({
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
				ofType(zActions.REQUESTWRITTEN_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateRequestWrittenDto | FormData, string>) => {
					return this.requestWrittenService.update(action.id || '', action.payload).pipe(
						map((response: Response<RequestWritten>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.REQUESTWRITTEN_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.REQUESTWRITTEN_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
