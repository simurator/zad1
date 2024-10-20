import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// @ts-ignore
bootstrapApplication(AppComponent, appConfig)
  .catch((err: any) => console.error(err));
