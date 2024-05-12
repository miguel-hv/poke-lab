import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const pokeTypeGuard = (typeGuard: string): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (auth.keyType() === typeGuard) {
      return true
    }

    return router.parseUrl('home');


  };
};