import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { CustomerModule } from './app/Customer.mainmodule';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(CustomerModule)
  .catch((err) => console.error(err));
