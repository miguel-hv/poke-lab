import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';

const routesenum = UrlRoutes;

export const pokeTypeGuard = (typeGuard: string): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    console.log(auth.pokemon()?.type);

    if (auth.pokemon()?.type === typeGuard) {
      return true
    }

    return router.parseUrl(routesenum.home);


  };
};