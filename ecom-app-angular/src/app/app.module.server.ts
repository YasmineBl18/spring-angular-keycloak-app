import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app';
import { routes } from './app-routing-module';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
}
