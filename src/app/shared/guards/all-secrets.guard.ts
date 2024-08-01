import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';

const routesenum = UrlRoutes;

export const isAllSecretsGuard = () : CanActivateFn => {
  return () => {
    if (inject(AuthService).secrets().length < 3 ) {
      return inject(Router).parseUrl(routesenum.home);
    } else {
      return true;
    } 
  } 
};
