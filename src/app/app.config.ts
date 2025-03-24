import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {counterReducer} from './Store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './Store/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
        counter: counterReducer
    }),
    provideEffects([CounterEffects])
]
};
