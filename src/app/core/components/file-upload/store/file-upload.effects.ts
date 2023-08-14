import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as zActions from './file-upload.action';
import { ZUploadService } from '../services/file-upload.service';
import { ZUpload } from '../models/file-upload.model';
import { Payload, ZI_Response, ZMessages } from 'src/app/core/entities';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';

@Injectable()
export class ZUploadffects {
	private readonly actions$ = inject(Actions);
	private readonly matSnackBarService = inject(MatSnackBarService);
	private readonly zUploadService = inject(ZUploadService);

	constructor() {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.ZUPLOAD_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.zUploadService.create(action.payload).pipe(
						map((response: ZI_Response<ZUpload>) => {
							this.matSnackBarService.open('success', ZMessages.success);

							return zActions.ZUPLOAD_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: undefined) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.ZUPLOAD_CREATE_FAILED({
									payload: exception
								})
							);
						})
					)
				)
			)
	);

	update$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.ZUPLOAD_REMOVE_REQUESTED),
				switchMap((action: Payload<string[]>) =>
					this.zUploadService.remove(action.payload).pipe(
						map((response: ZI_Response<ZUpload>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.ZUPLOAD_REMOVE_LOADED({
								payload: response
							});
						}),
						catchError((exception: undefined) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.ZUPLOAD_REMOVE_FAILED({
									payload: exception
								})
							);
						})
					)
				)
			) // , { dispatch: false }
	);
}
