import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { DEFAULT_DIALOG_CONFIG, DialogConfig } from '@angular/cdk/dialog';
import { OverlayPositionBuilder } from '@angular/cdk/overlay';


export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes), 
    provideHttpClient(), 
    {provide: DialogConfig}
    // {provide: DEFAULT_DIALOG_CONFIG, useValue: {hasBackdrop: false}}
    // {provide: DEFAULT_DIALOG_CONFIG, useValue: {positionStrategy: OverlayPositionBuilder.global().centerHorizontally()}},
  ]
};
