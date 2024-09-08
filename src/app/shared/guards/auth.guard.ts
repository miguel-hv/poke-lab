import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import { UserStore } from '../stores/userStore';

const routesenum = UrlRoutes;

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    const store = inject(UserStore);
    const router = inject(Router);

    if (store.currentUser()) {
      return true;
    }

    return router.parseUrl(routesenum.access);
  };
};
