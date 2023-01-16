import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './contract.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { Contract, UpdateContractDto } from '../entities';
import { ContractService } from '../services/contract.service';

@Injectable()
export class ContractEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly contractService: ContractService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.CONTRACT_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.contractService.create(action.payload).pipe(
						map((response: Response<Contract>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CONTRACT_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CONTRACT_CREATE_FAILED({
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
				ofType(zActions.CONTRACT_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.contractService.findAll(action.payload).pipe(
						map((response: Response<Contract[]>) => {
							return zActions.CONTRACT_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.CONTRACT_FIND_ALL_FAILED({
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
				ofType(zActions.CONTRACT_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.contractService.findOne(action.payload).pipe(
						map((response: Response<Contract>) =>
							zActions.CONTRACT_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.CONTRACT_FIND_ONE_FAILED({
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
				ofType(zActions.CONTRACT_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateContractDto | FormData, string>) => {
					return this.contractService.update(action.id || '', action.payload).pipe(
						map((response: Response<Contract>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CONTRACT_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CONTRACT_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
