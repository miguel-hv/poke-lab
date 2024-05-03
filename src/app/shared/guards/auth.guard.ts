import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    console.log("pass guard");

    console.log(authService.currentUser());
    if (authService.currentUser()) {
      return true;
    }

    return router.parseUrl('login');
  };
};
