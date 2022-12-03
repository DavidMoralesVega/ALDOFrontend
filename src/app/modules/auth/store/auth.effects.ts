import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, take } from 'rxjs/operators';
import { Observable, of, defer, tap } from 'rxjs';
import { Exception, Response } from 'src/app/core/entities';
import * as zActions from './auth.action';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { Payload } from 'src/app/core/entities/adapters/object.adapter';
import { TokenStorageService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PayloadLogin } from '../../../core/entities/adapters/object.adapter';
import { LoginUserDto, UserTokenDto } from '../pages/auth-user/entities/models/user.model';
import { LoginUserERPDto, UserERPTokenDto } from '../pages/auth-erp/entities/models/user-erp.model';
import { ETypeUser } from '../entities/enums/type-user';

@Injectable()
export class AuthEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
		private readonly matSnackBarService: MatSnackBarService,
		private readonly tokenStorageService: TokenStorageService,
		private readonly router: Router
	) {}

	login$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.LOGIN_REQUESTED),
				switchMap((action: PayloadLogin<LoginUserDto | LoginUserERPDto, ETypeUser>) =>
					this.authService.login(action.payload, action.t).pipe(
						map((response: Response<UserTokenDto | UserERPTokenDto>) => {
							this.matSnackBarService.open('success', 'Bienvenido');

							this.tokenStorageService.saveToken(response.data.token);

							this.router.navigateByUrl('/admin');

							return zActions.LOGIN_SUCCESS({ payload: response });

							// redirect module home
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('success', exception.message);
							return of(zActions.LOGIN_FAILED({ payload: exception }));
						})
					)
				)
			)
	);

	getUser$ = createEffect(
		(): Observable<any> =>
			this.actions$.pipe(
				ofType(zActions.GET_AUTH),
				switchMap((action: Payload<ETypeUser>) =>
					this.authService.checkAuthStatus(action.payload).pipe(
						take(1),
						map((response: Response<UserTokenDto | UserERPTokenDto>) => {
							this.tokenStorageService.saveToken(response.data.token);
							console.log('data', response);
							return zActions.LOGIN_SUCCESS({ payload: response });

							// redirect module home
						}),
						catchError((exception: Exception) => {
							this.matSnackBarService.open('success', exception.message);
							return of(zActions.LOGIN_FAILED({ payload: exception }));
						})
					)
				)
			)
	);

	// logout$ = createEffect(
	// 	(): Observable<any> =>
	// 		defer(() => {
	// 			this.tokenStorageService.signOut();
	// 			this.router.navigateByUrl('/');
	// 			return of(zActions.LOGOUT_COMPLETED());
	// 		})
	// );

	// init$ = createEffect((): Observable<any> => defer(() => of(zActions.GET_AUTH())));
}
