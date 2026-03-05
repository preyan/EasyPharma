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
import { tapResponse } from '@ngrx/operators';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AUTH_STORAGE_KEYS, ROLES, User, AuthResponse, LoginDto, RegisterDto } from '@easy-pharma/shared-core';

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem(AUTH_STORAGE_KEYS.USER) || 'null'),
    accessToken: localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN),
    refreshToken: localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN),
    isLoading: false,
    error: null,
};

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ user, accessToken }) => ({
        isAuthenticated: computed(() => !!accessToken() && !!user()),
        isAdmin: computed(() => user()?.role === ROLES.ADMIN),
        currentRole: computed(() => user()?.role || null),
    })),
    withMethods((store, authService = inject(AuthService), router = inject(Router)) => ({
        login: rxMethod<LoginDto>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap((credentials) =>
                    authService.login(credentials).pipe(
                        tapResponse({
                            next: (response: AuthResponse) => {
                                patchState(store, {
                                    user: response.user,
                                    accessToken: response.accessToken,
                                    refreshToken: response.refreshToken,
                                    isLoading: false,
                                });
                                localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, response.accessToken);
                                localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
                                localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(response.user));
                                router.navigate(['/dashboard']);
                            },
                            error: (error: { error?: { message?: string } }) => {
                                patchState(store, {
                                    isLoading: false,
                                    error: error.error?.message || 'Login failed',
                                });
                            },
                        })
                    )
                )
            )
        ),
        register: rxMethod<RegisterDto>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap((data) =>
                    authService.register(data).pipe(
                        tapResponse({
                            next: (response: AuthResponse) => {
                                patchState(store, {
                                    user: response.user,
                                    accessToken: response.accessToken,
                                    refreshToken: response.refreshToken,
                                    isLoading: false,
                                });
                                localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, response.accessToken);
                                localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
                                localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(response.user));
                                router.navigate(['/dashboard']);
                            },
                            error: (error: { error?: { message?: string } }) => {
                                patchState(store, {
                                    isLoading: false,
                                    error: error.error?.message || 'Registration failed',
                                });
                            },
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
            localStorage.removeItem(AUTH_STORAGE_KEYS.USER);
            localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
            router.navigate(['/login']);
        },
        updateTokens(accessToken: string, refreshToken: string) {
            patchState(store, { accessToken, refreshToken });
            localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
        },
    }))
);
