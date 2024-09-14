import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DialogConfig } from '@angular/cdk/dialog';
import { provideState, provideStore } from '@ngrx/store';
import { userReducer } from './shared/stores/user.reducer';


export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    { provide: DialogConfig },
    provideStore(),
    provideState({ name: 'user', reducer: userReducer })
]
};
