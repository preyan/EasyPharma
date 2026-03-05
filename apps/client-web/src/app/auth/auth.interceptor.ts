import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthStore } from './auth.store';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { ENDPOINTS, AuthResponse } from '@easy-pharma/shared-core';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const authStore = inject(AuthStore);
    const authService = inject(AuthService);
    const token = authStore.accessToken();

    let authReq = req;
    if (token && !req.url.includes(ENDPOINTS.AUTH.REFRESH)) {
        authReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
    }

    return next(authReq).pipe(
        catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401 && !req.url.includes(ENDPOINTS.AUTH.LOGIN)) {
                return handle401Error(authReq, next, authStore, authService);
            }
            return throwError(() => error);
        })
    );
};

function handle401Error(
    request: HttpRequest<unknown>,
    next: HttpHandlerFn,
    authStore: any,
    authService: AuthService
): Observable<HttpEvent<unknown>> {
    if (!isRefreshing) {
        isRefreshing = true;
        refreshTokenSubject.next(null);

        const refreshToken = authStore.refreshToken();
        if (refreshToken) {
            return authService.refresh(refreshToken).pipe(
                switchMap((tokens: { accessToken: string; refreshToken: string }) => {
                    isRefreshing = false;
                    authStore.updateTokens(tokens.accessToken, tokens.refreshToken);
                    refreshTokenSubject.next(tokens.accessToken);
                    return next(request.clone({
                        setHeaders: { Authorization: `Bearer ${tokens.accessToken}` }
                    }));
                }),
                catchError((err: unknown) => {
                    isRefreshing = false;
                    authStore.clearState();
                    return throwError(() => err);
                })
            );
        } else {
            isRefreshing = false;
            authStore.clearState();
            return throwError(() => new Error('No refresh token available')); // Explicitly creating an Error object
        }
    } else {
        return refreshTokenSubject.pipe(
            filter((token) => token !== null),
            take(1),
            switchMap((token) => {
                return next(request.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
                }));
            })
        );
    }
}
