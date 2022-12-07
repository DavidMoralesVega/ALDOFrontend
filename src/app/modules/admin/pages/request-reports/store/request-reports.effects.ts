import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './request-reports.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { RequestReportsService } from '../services/request-reports.service';
import {
	RequestReports,
	CreateRequestReportsDto,
	UpdateRequestReportsDto
} from '../entities/models/request-reports.model';
import {} from '../services/request-reports.service';

@Injectable()
export class RequestReportsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly requestReportsService: RequestReportsService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.REQUESTREPORTS_CREATE_REQUESTED),
				switchMap((action: Payload<CreateRequestReportsDto>) =>
					this.requestReportsService.create(action.payload).pipe(
						map((response: Response<RequestReports>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.REQUESTREPORTS_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.REQUESTREPORTS_CREATE_FAILED({
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
				ofType(zActions.REQUESTREPORTS_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.requestReportsService.findAll(action.payload).pipe(
						map((response: Response<RequestReports[]>) => {
							return zActions.REQUESTREPORTS_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.REQUESTREPORTS_FIND_ALL_FAILED({
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
				ofType(zActions.REQUESTREPORTS_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.requestReportsService.findOne(action.payload).pipe(
						map((response: Response<RequestReports>) =>
							zActions.REQUESTREPORTS_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.REQUESTREPORTS_FIND_ONE_FAILED({
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
				ofType(zActions.REQUESTREPORTS_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateRequestReportsDto, string>) => {
					return this.requestReportsService.update(action.id || '', action.payload).pipe(
						map((response: Response<RequestReports>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.REQUESTREPORTS_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.REQUESTREPORTS_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
