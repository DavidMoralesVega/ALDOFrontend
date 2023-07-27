import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './procceding.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { ProccedingService } from '../services/procceding.service';
import { Procceding, UpdateProccedingDto } from '../entities/models/procceding.model';
@Injectable()
export class ProccedingEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly proccedingService: ProccedingService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.PROCCEDING_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.proccedingService.create(action.payload).pipe(
						map((response: Response<Procceding>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.PROCCEDING_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.PROCCEDING_CREATE_FAILED({
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
				ofType(zActions.PROCCEDING_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.proccedingService.findAll(action.payload).pipe(
						map((response: Response<Procceding[]>) => {
							return zActions.PROCCEDING_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.PROCCEDING_FIND_ALL_FAILED({
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
				ofType(zActions.PROCCEDING_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.proccedingService.findOne(action.payload).pipe(
						map((response: Response<Procceding>) =>
							zActions.PROCCEDING_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.PROCCEDING_FIND_ONE_FAILED({
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
				ofType(zActions.PROCCEDING_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateProccedingDto | FormData, string>) => {
					return this.proccedingService.update(action.id || '', action.payload).pipe(
						map((response: Response<Procceding>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.PROCCEDING_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.PROCCEDING_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
