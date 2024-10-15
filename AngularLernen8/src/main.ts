import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule, FormsModule),
    provideHttpClient(withFetch())
  ]
})
  .catch((err) => console.error(err));
