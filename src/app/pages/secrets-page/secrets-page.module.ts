import { Routes } from '@angular/router';
import { pokeTypeGuard } from '../../shared/guards/type.guard';
import { UrlRoutes } from '../../shared/enumerators/urlRoutes.enum';

const urlRoutes = UrlRoutes;
const LEAF = urlRoutes.secretLeaf;
const FIRE = urlRoutes.secretFire;
const WATER = urlRoutes.secretWater;

export const SECRETS_ROUTES: Routes = [
    { 
        path: LEAF,  
        canActivate: [pokeTypeGuard(LEAF)], 
        loadComponent: () => import('./leaf-secret/leaf-secret.component').then(m => m.LeafSecretComponent)
    },
    { 
        path: FIRE, 
        canActivate: [pokeTypeGuard(FIRE)], 
        loadComponent: () => import('./fire-secret/fire-secret.component').then(m => m.FireSecretComponent)
    },
    { 
        path: WATER, 
        canActivate: [pokeTypeGuard(WATER)], 
        loadComponent: () => import('./water-secret/water-secret.component').then(m => m.WaterSecretComponent)
    }
];
