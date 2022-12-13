import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './library.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { LibraryService } from '../services/library.service';
import { Library, UpdateLibraryDto } from '../entities/models/library.model';

@Injectable()
export class LibraryEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly libraryService: LibraryService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.LIBRARY_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.libraryService.create(action.payload).pipe(
						map((response: Response<Library>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.LIBRARY_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.LIBRARY_CREATE_FAILED({
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
				ofType(zActions.LIBRARY_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.libraryService.findAll(action.payload).pipe(
						map((response: Response<Library[]>) => {
							return zActions.LIBRARY_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.LIBRARY_FIND_ALL_FAILED({
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
				ofType(zActions.LIBRARY_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.libraryService.findOne(action.payload).pipe(
						map((response: Response<Library>) =>
							zActions.LIBRARY_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.LIBRARY_FIND_ONE_FAILED({
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
				ofType(zActions.LIBRARY_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateLibraryDto, string>) => {
					return this.libraryService.update(action.id || '', action.payload).pipe(
						map((response: Response<Library>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.LIBRARY_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.LIBRARY_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
