import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './adm-pais.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { AdmPaisService } from '../services/adm-pais.service';
import { CreateAdmPaisDto, AdmPais, UpdateAdmPaisDto } from '../entities/models/adm-pais.model';

@Injectable()
export class AdmPaisEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly admPaisService: AdmPaisService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.ADMPAIS_CREATE_REQUESTED),
				switchMap((action: Payload<CreateAdmPaisDto>) =>
					this.admPaisService.create(action.payload).pipe(
						map((response: Response<AdmPais>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.ADMPAIS_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.ADMPAIS_CREATE_FAILED({
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
				ofType(zActions.ADMPAIS_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.admPaisService.findAll(action.payload).pipe(
						map((response: Response<AdmPais[]>) => {
							return zActions.ADMPAIS_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.ADMPAIS_FIND_ALL_FAILED({
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
				ofType(zActions.ADMPAIS_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.admPaisService.findOne(action.payload).pipe(
						map((response: Response<AdmPais>) =>
							zActions.ADMPAIS_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.ADMPAIS_FIND_ONE_FAILED({
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
				ofType(zActions.ADMPAIS_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateAdmPaisDto, string>) => {
					return this.admPaisService.update(action.id || '', action.payload).pipe(
						map((response: Response<AdmPais>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.ADMPAIS_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.ADMPAIS_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
