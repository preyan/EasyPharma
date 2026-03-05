import { inject } from '@angular/core';
import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';
import { AuthService, User } from './auth.service';
import { Router } from '@angular/router';

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isLoading: false,
    error: null,
};

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ user, accessToken }) => ({
        isAuthenticated: computed(() => !!accessToken() && !!user()),
        isAdmin: computed(() => user()?.role === 'ADMIN'),
        currentRole: computed(() => user()?.role || null),
    })),
    withMethods((store, authService = inject(AuthService), router = inject(Router)) => ({
        login: rxMethod<any>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap((credentials) =>
                    authService.login(credentials).pipe(
                        tap((response) => {
                            patchState(store, {
                                user: response.user,
                                accessToken: response.accessToken,
                                refreshToken: response.refreshToken,
                                isLoading: false,
                            });
                            localStorage.setItem('user', JSON.stringify(response.user));
                            localStorage.setItem('accessToken', response.accessToken);
                            localStorage.setItem('refreshToken', response.refreshToken);
                            router.navigate(['/dashboard']);
                        }),
                        catchError((err) => {
                            patchState(store, {
                                isLoading: false,
                                error: err.error?.message || 'Login failed',
                            });
                            return of(null);
                        })
                    )
                )
            )
        ),
        register: rxMethod<any>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap((data) =>
                    authService.register(data).pipe(
                        tap((response) => {
                            patchState(store, {
                                user: response.user,
                                accessToken: response.accessToken,
                                refreshToken: response.refreshToken,
                                isLoading: false,
                            });
                            localStorage.setItem('user', JSON.stringify(response.user));
                            localStorage.setItem('accessToken', response.accessToken);
                            localStorage.setItem('refreshToken', response.refreshToken);
                            router.navigate(['/dashboard']);
                        }),
                        catchError((err) => {
                            patchState(store, {
                                isLoading: false,
                                error: err.error?.message || 'Registration failed',
                            });
                            return of(null);
                        })
                    )
                )
            )
        ),
        logout() {
            authService.logout().subscribe({
                next: () => {
                    this.clearState();
                },
                error: () => {
                    this.clearState();
                },
            });
        },
        clearState() {
            patchState(store, {
                user: null,
                accessToken: null,
                refreshToken: null,
                error: null,
            });
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.navigate(['/login']);
        },
        updateTokens(accessToken: string, refreshToken: string) {
            patchState(store, { accessToken, refreshToken });
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        },
    }))
);
