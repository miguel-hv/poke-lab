import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DEFAULT_DIALOG_CONFIG, DialogConfig } from '@angular/cdk/dialog';
import { OverlayPositionBuilder } from '@angular/cdk/overlay';
import { provideStore } from '@ngrx/store';


export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    { provide: DialogConfig }
    // {provide: DEFAULT_DIALOG_CONFIG, useValue: {hasBackdrop: false}}
    // {provide: DEFAULT_DIALOG_CONFIG, useValue: {positionStrategy: OverlayPositionBuilder.global().centerHorizontally()}},
    ,
    provideStore()
]
};
