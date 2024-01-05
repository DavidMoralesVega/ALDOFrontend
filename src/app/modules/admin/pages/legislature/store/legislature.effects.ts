import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './legislature.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { LegislatureService } from '../services/legislature.service';
import {
	Legislature,
	CreateLegislatureDto,
	UpdateLegislatureDto,
	LegislatureAdapter
} from '../entities/models/legislature.model';

@Injectable()
export class LegislatureEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly legislatureService: LegislatureService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.LEGISLATURE_CREATE_REQUESTED),
				switchMap((action: Payload<CreateLegislatureDto>) =>
					this.legislatureService.create(action.payload).pipe(
						map((response: Response<Legislature>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.LEGISLATURE_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.LEGISLATURE_CREATE_FAILED({
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
				ofType(zActions.LEGISLATURE_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.legislatureService.findAll(action.payload).pipe(
						map((response: Response<LegislatureAdapter[]>) => {
							return zActions.LEGISLATURE_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.LEGISLATURE_FIND_ALL_FAILED({
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
				ofType(zActions.LEGISLATURE_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.legislatureService.findOne(action.payload).pipe(
						map((response: Response<Legislature>) =>
							zActions.LEGISLATURE_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.LEGISLATURE_FIND_ONE_FAILED({
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
				ofType(zActions.LEGISLATURE_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateLegislatureDto, string>) => {
					return this.legislatureService.update(action.id || '', action.payload).pipe(
						map((response: Response<Legislature>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.LEGISLATURE_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.LEGISLATURE_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
