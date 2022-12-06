import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Exception, Pagination, Response, ZMessages } from 'src/app/core/entities';
import * as zActions from './category.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload, PayloadUpdate } from 'src/app/core/entities/adapters/object.adapter';
import { CategoryService } from '../services/category.service';
import { Category, CreateCategoryDto, UpdateCategoryDto } from '../entities/models/category.model';

@Injectable()
export class CategoryEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly CategoryService: CategoryService,
		private readonly matSnackBarService: MatSnackBarService
	) {}

	create$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.CATEGORY_CREATE_REQUESTED),
				switchMap((action: Payload<CreateCategoryDto>) =>
					this.CategoryService.create(action.payload).pipe(
						map((response: Response<Category>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CATEGORY_CREATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CATEGORY_CREATE_FAILED({
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
				ofType(zActions.CATEGORY_FIND_ALL_REQUESTED),
				mergeMap((action: Payload<Pagination>) =>
					this.CategoryService.findAll(action.payload).pipe(
						map((response: Response<Category[]>) => {
							return zActions.CATEGORY_FIND_ALL_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) =>
							of(
								zActions.CATEGORY_FIND_ALL_FAILED({
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
				ofType(zActions.CATEGORY_FIND_ONE_REQUESTED),
				mergeMap((action: Payload<string>) =>
					this.CategoryService.findOne(action.payload).pipe(
						map((response: Response<Category>) =>
							zActions.CATEGORY_FIND_ONE_LOADED({
								payload: response
							})
						),
						catchError((exception: Exception) =>
							of(
								zActions.CATEGORY_FIND_ONE_FAILED({
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
				ofType(zActions.CATEGORY_UPDATE_REQUESTED),
				switchMap((action: PayloadUpdate<UpdateCategoryDto, string>) => {
					return this.CategoryService.update(action.id || '', action.payload).pipe(
						map((response: Response<Category>) => {
							this.matSnackBarService.open('success', ZMessages.success);
							return zActions.CATEGORY_UPDATE_LOADED({
								payload: response
							});
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('error', ZMessages.error);
							return of(
								zActions.CATEGORY_UPDATE_FAILED({
									payload: exception
								})
							);
						})
					);
				})
			) // , { dispatch: false }
	);
}
