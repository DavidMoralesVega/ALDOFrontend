import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './resolutions.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { ResolutionService } from '../services/resolutions.service';
import {
	CreateResolutionDto,
	Resolution,
	UpdateResolutionDto
} from '../entities/models/resolutions.model';

@Injectable()
export class ResolutionEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly resolutionService: ResolutionService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.RESOLUTION_CREATE_REQUESTED),
				switchMap((action: Payload<CreateResolutionDto>) =>
					this.resolutionService.create(action.payload).pipe(
						map((response: Response<Resolution>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.RESOLUTION_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.RESOLUTION_CREATE_FAILED({
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
				ofType(zActions.RESOLUTION_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.resolutionService.findAll(action.payload).pipe(
						map((response: Response<Resolution[]>) => {
							return zActions.RESOLUTION_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.RESOLUTION_FIND_ALL_FAILED({
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
				ofType(zActions.RESOLUTION_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.resolutionService.findOne(action.payload).pipe(
						map((response: Response<Resolution>) =>
							zActions.RESOLUTION_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.RESOLUTION_FIND_ONE_FAILED({
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
				ofType(zActions.RESOLUTION_UPDATE_REQUESTED),
				switchMap(
					(action: PayloadUpdate<UpdateResolutionDto | CreateResolutionDto, string>) => {
						return this.resolutionService.update(action.id || '', action.payload).pipe(
							map((response: Response<Resolution>) => {
								this.matSnackBarService.open('success', ZMessages.success);
								return zActions.RESOLUTION_UPDATE_LOADED({
									payload: response
								});
							}),
							catchError((exception: Exception) => {
								this.matSnackBarService.open('error', ZMessages.error);
								return of(
									zActions.RESOLUTION_UPDATE_FAILED({
										payload: exception
									})
								);
							})
						);
					}
				)
			) // , { dispatch: false }
	);
}
