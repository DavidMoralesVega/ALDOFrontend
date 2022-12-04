import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './departament-law.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { DepartamentLawService } from '../services/departament-law.service';
import {
	DepartamentLaw,
	CreateDepartamentLawDto,
	UpdateDepartamentLawDto
} from '../entities/models/departament-law.model';

@Injectable()
export class DepartamentLawEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly departamentLawService: DepartamentLawService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.DEPARTAMENTLAW_CREATE_REQUESTED),
				switchMap((action: Payload<CreateDepartamentLawDto>) =>
					this.departamentLawService.create(action.payload).pipe(
						map((response: Response<DepartamentLaw>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.DEPARTAMENTLAW_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.DEPARTAMENTLAW_CREATE_FAILED({
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
				ofType(zActions.DEPARTAMENTLAW_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.departamentLawService.findAll(action.payload).pipe(
						map((response: Response<DepartamentLaw[]>) => {
							return zActions.DEPARTAMENTLAW_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.DEPARTAMENTLAW_FIND_ALL_FAILED({
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
				ofType(zActions.DEPARTAMENTLAW_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.departamentLawService.findOne(action.payload).pipe(
						map((response: Response<DepartamentLaw>) =>
							zActions.DEPARTAMENTLAW_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.DEPARTAMENTLAW_FIND_ONE_FAILED({
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
				ofType(zActions.DEPARTAMENTLAW_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateDepartamentLawDto, string>) => {
					return this.departamentLawService.update(action.id || '', action.payload).pipe(
						map((response: Response<DepartamentLaw>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.DEPARTAMENTLAW_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.DEPARTAMENTLAW_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
