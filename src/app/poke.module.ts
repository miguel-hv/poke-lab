import { Routes } from '@angular/router';
import { UrlRoutes } from './shared/enumerators/urlRoutes.enum';

const routesenum = UrlRoutes;

export const POKE_ROUTES: Routes = [
    { 
        path: '',
        redirectTo: routesenum.home,
        pathMatch: 'full' 
    },
    { 
        path: routesenum.home,
        loadComponent: () => import('./pages/home-page/home-page.component')
            .then(m => m.HomePageComponent) 
    },
    { 
        path: routesenum.selectPokemon, 
        loadComponent: () => import('./pages/select-pokemon-page/select-pokemon-page.component')
            .then(m => m.SelectPokemonPageComponent) 
    },
    { 
        path : routesenum.secrets,
        loadChildren: () => import('./pages/secrets-page/secrets-page.module')
            .then(m => m.SECRETS_ROUTES)
    }
];
