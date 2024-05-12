import { Routes } from '@angular/router';
import { pokeTypeGuard } from '../../shared/guards/type.guard';

export const SECRETS_ROUTES: Routes = [
    { 
        path: 'leaf',  
        canActivate: [pokeTypeGuard()], 
        loadComponent: () => import('./leaf-secret/leaf-secret.component').then(m => m.LeafSecretComponent)
    },
    { 
        path: 'fire', 
        canActivate: [pokeTypeGuard()], 
        loadComponent: () => import('./fire-secret/fire-secret.component').then(m => m.FireSecretComponent)
    },
    { 
        path: 'water', 
        canActivate: [pokeTypeGuard()], 
        loadComponent: () => import('./water-secret/water-secret.component').then(m => m.WaterSecretComponent)
    }
];
