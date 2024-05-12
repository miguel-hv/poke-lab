import { Routes } from '@angular/router';
import { pokeTypeGuard } from '../../shared/guards/type.guard';

const LEAF = 'leaf';
const FIRE = 'fire';
const WATER = 'water';

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
