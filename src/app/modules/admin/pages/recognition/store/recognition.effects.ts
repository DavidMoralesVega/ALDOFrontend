import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './recognition.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { RecognitionService } from '../services/recognition.service';
import { Recognition, UpdateRecognitionDto } from '../entities';

@Injectable()
export class RecognitionEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly recognitionService: RecognitionService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.RECOGNITION_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.recognitionService.create(action.payload).pipe(
						map((response: Response<Recognition>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.RECOGNITION_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.RECOGNITION_CREATE_FAILED({
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
				ofType(zActions.RECOGNITION_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.recognitionService.findAll(action.payload).pipe(
						map((response: Response<Recognition[]>) => {
							return zActions.RECOGNITION_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.RECOGNITION_FIND_ALL_FAILED({
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
				ofType(zActions.RECOGNITION_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.recognitionService.findOne(action.payload).pipe(
						map((response: Response<Recognition>) =>
							zActions.RECOGNITION_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.RECOGNITION_FIND_ONE_FAILED({
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
				ofType(zActions.RECOGNITION_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateRecognitionDto, string>) => {
					return this.recognitionService.update(action.id || '', action.payload).pipe(
						map((response: Response<Recognition>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.RECOGNITION_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.RECOGNITION_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
