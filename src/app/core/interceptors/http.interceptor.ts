import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { TokenStorageService } from '../services/token.service';
import { EventBusService } from '../shared/event/event-bus.service';
import { EventData } from '../shared/event/event.class';

// const TOKEN_HEADER_KEY = 'Authorization';        // for Spring Boot back-end
const TOKEN_HEADER_KEY = 'x-access-token'; // for Node.js Express back-end

@Injectable()
export class AuthERPInterceptor implements HttpInterceptor {
	private isRefreshing = false;
	private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(
		private readonly tokenStorageService: TokenStorageService,
		private readonly eventBusService: EventBusService
	) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
		let authReq = req;
		const token = this.tokenStorageService.getToken();
		if (token != null) {
			authReq = this.addTokenHeader(req, token);
		}

		return next.handle(authReq).pipe(
			catchError((error) => {
				if (
					error instanceof HttpErrorResponse &&
					!authReq.url.includes('auth/erp') &&
					!authReq.url.includes('auth/user') &&
					error.status === 401
				) {
					return this.handle401Error(authReq, next);
				} else {
					this.eventBusService.emit(new EventData('logout', null));

					return throwError(error);
				}
			})
		);
	}

	private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
		if (!this.isRefreshing) {
			this.isRefreshing = true;
			this.refreshTokenSubject.next(null);

			const token = this.tokenStorageService.getRefreshToken();

			this.isRefreshing = false;

			this.tokenStorageService.saveToken(token || '');
			this.refreshTokenSubject.next(token);

			return next.handle(this.addTokenHeader(request, token || ''));
		}

		return this.refreshTokenSubject.pipe(
			filter((token) => token !== null),
			take(1),
			switchMap((token) => next.handle(this.addTokenHeader(request, token)))
		);
	}

	private addTokenHeader(request: HttpRequest<any>, token: string) {
		return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
	}
}

export const authInterceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: AuthERPInterceptor, multi: true }
];
