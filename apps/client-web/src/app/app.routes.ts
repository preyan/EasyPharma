import { Route } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { guestGuard } from './auth/guest.guard';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        canActivate: [guestGuard],
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
