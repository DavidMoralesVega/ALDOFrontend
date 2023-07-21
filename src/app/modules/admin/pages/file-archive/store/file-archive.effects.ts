import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './file-archive.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { FilesArchiveService } from '../services/file-archive.service';
import { FilesArchive, UpdateFilesArchiveDto } from '../entities/models/file-archive.model';

@Injectable()
export class FilesArchiveEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly filesArchiveService: FilesArchiveService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.FILESARCHIVE_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.filesArchiveService.create(action.payload).pipe(
						map((response: Response<FilesArchive>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.FILESARCHIVE_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.FILESARCHIVE_CREATE_FAILED({
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
				ofType(zActions.FILESARCHIVE_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.filesArchiveService.findAll(action.payload).pipe(
						map((response: Response<FilesArchive[]>) => {
							return zActions.FILESARCHIVE_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.FILESARCHIVE_FIND_ALL_FAILED({
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
				ofType(zActions.FILESARCHIVE_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.filesArchiveService.findOne(action.payload).pipe(
						map((response: Response<FilesArchive>) =>
							zActions.FILESARCHIVE_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.FILESARCHIVE_FIND_ONE_FAILED({
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
				ofType(zActions.FILESARCHIVE_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateFilesArchiveDto | FormData, string>) => {
					return this.filesArchiveService.update(action.id || '', action.payload).pipe(
						map((response: Response<FilesArchive>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.FILESARCHIVE_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.FILESARCHIVE_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
