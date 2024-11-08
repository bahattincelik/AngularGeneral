import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        console.log('App initialization complete');
        return null;
      },
      multi: true,
    },
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
