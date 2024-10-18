import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomPreloadingStrategyComponent } from './app/custom-preloading-strategy/custom-preloading-strategy.component';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(CustomPreloadingStrategyComponent)) // withPreloading ile preloading stratejisini ekledik
  ]
  //... other appConfig settings

  // customPreloadingStrategy: CustomPreloadingStrategyComponent  // for lazy loading with preloading

  // customPreloadingStrategy: NoPreloading  // for lazy loading without preloading

  // customPreloadingStrategy: null  // for lazy loading without preloading

  // customPreloadingStrategy: []  // for lazy loading without preloading

  // customPreloadingStrategy: { preloadAllModules: true }  // for lazy loading without preloading, but preloading all modules at once

  // customPreloadingStrategy: { preloadModules: true }  // for lazy loading without preloading, but preloading specific modules at once

  // customPreloadingStrategy: { preloadModules: ['module1', 'module2'] }  // for lazy loading without preloading, but
})
  .catch((err) => console.error(err));
