import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { provideTransloco } from '@ngneat/transloco';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { environment } from '../environments/environment.environment';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideHotToastConfig(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'fa'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
