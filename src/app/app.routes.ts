import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import { UrlRoutes } from './shared/enumerators/urlRoutes.enum';

const routesenum = UrlRoutes;

export const routes: Routes = [
    { 
        path: '',
        redirectTo: routesenum.poke,
        pathMatch: 'full' 
    },
    { 
        path: routesenum.access,
        loadComponent: () => import('./pages/login-page/login-page.component')
            .then(m => m.LoginPageComponent) 
    },
    { 
        path: routesenum.welcome,
        loadComponent: () => import('./pages/welcome-page/welcome-page.component')
            .then(m => m.WelcomePageComponent) 
    },
    { 
        path : routesenum.poke,
        canActivate: [isAuthenticatedGuard()],
        loadChildren: () => import('./poke.module')
            .then(m => m.POKE_ROUTES) 
    },
    { path: '**', redirectTo: routesenum.poke }
];
