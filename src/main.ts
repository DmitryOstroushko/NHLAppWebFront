import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ErrorHandler } from '@angular/core';
import { ErrorHandlerService } from './app/service/error-handler.service';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
  .catch(err => console.error(err));
