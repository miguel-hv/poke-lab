import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    console.log("pass guard");

    console.log(auth.currentUser());
    if (auth.currentUser()) {
      return true;
    }

    return router.parseUrl('login');
  };
};
