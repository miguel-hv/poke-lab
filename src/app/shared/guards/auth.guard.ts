import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';

const routesenum = UrlRoutes;

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (auth.currentUser()) {
      return true;
    }

    return router.parseUrl(routesenum.access);
  };
};
