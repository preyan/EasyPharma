import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
}

export interface AuthResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api/auth';

    register(data: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
    }

    login(data: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
    }

    refresh(refreshToken: string): Observable<{ accessToken: string; refreshToken: string }> {
        return this.http.post<{ accessToken: string; refreshToken: string }>(
            `${this.apiUrl}/refresh`,
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
    }

    logout(): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/logout`, {});
    }

    me(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/me`);
    }
}
