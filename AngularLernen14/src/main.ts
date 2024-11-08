import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      /*useFactory: () => () => {
        console.log('App initialization complete');
        return null;
      },
      multi: true,*/

      useFactory: (httpClient: HttpClient) => () =>
        httpClient
          .get('./assets/config/appConfig.json')
          .toPromise()
          .then((config) => {
            console.log(config);
          }),

      deps: [HttpClient],
      multi: true,
    },
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
