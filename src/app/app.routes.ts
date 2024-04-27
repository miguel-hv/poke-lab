import { Routes } from '@angular/router';

export const routes: Routes = [
    //match empty path
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent) },
    { path: 'login', loadChildren: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent) },
    { path: '**', redirectTo: 'home' }
];
