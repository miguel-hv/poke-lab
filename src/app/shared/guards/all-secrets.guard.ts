import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import { UserStore } from '../stores/userStore';

const routesenum = UrlRoutes;

export const isAllSecretsGuard = () : CanActivateFn => {
  return () => {
    const secrets = inject(UserStore).secrets();
    if (secrets && secrets.length < 3 ) {
      return inject(Router).parseUrl(routesenum.home);
    } else {
      return true;
    } 
  } 
};
