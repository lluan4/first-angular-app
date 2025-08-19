import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TASKS_SERVICE } from './tasks/tasks.contract';
import { TasksService } from './tasks/tasks.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TASKS_SERVICE, useExisting: TasksService },
  ],
};
