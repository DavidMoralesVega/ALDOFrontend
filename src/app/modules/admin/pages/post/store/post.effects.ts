import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './post.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { PostService } from '../services/post.service';
import { Post, CreatePostDto, UpdatePostDto } from '../entities/models/post.model';

@Injectable()
export class PostEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly postService: PostService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.POST_CREATE_REQUESTED),
				switchMap((action: Payload<FormData>) =>
					this.postService.create(action.payload).pipe(
						map((response: Response<Post>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.POST_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.POST_CREATE_FAILED({
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
				ofType(zActions.POST_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.postService.findAll(action.payload).pipe(
						map((response: Response<Post[]>) => {
							return zActions.POST_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.POST_FIND_ALL_FAILED({
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
				ofType(zActions.POST_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.postService.findOne(action.payload).pipe(
						map((response: Response<Post>) =>
							zActions.POST_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.POST_FIND_ONE_FAILED({
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
				ofType(zActions.POST_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdatePostDto, string>) => {
					return this.postService.update(action.id || '', action.payload).pipe(
						map((response: Response<Post>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.POST_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.POST_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
