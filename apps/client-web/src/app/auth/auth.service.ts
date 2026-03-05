import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS, User, AuthResponse, LoginDto, RegisterDto } from '@easy-pharma/shared-core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);

    register(data: RegisterDto): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(ENDPOINTS.AUTH.REGISTER, data);
    }

    login(credentials: LoginDto): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, credentials);
    }

    refresh(refreshToken: string): Observable<{ accessToken: string; refreshToken: string }> {
        return this.http.post<{ accessToken: string; refreshToken: string }>(
            ENDPOINTS.AUTH.REFRESH,
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
    }

    logout(): Observable<void> {
        return this.http.post<void>(ENDPOINTS.AUTH.LOGOUT, {});
    }

    me(): Observable<User> {
        return this.http.get<User>(ENDPOINTS.AUTH.ME);
    }
}
