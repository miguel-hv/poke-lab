import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  canActivate: [isAuthenticatedGuard], loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent) },
    { path: 'login', loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent) },
    { path: '**', redirectTo: 'home' }
];
