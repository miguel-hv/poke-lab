import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const pokeTypeGuard = (): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    //TODO: set guard
    return true;


  };
};