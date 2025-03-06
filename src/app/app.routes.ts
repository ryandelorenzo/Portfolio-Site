import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./components/home/home.component').then((m) => m.HomeComponent);
        },
      }, 
      {
          path: 'projects',
          loadComponent: () => {
              return import('./components/projects/projects.component').then((m) => m.ProjectsComponent);
          }
      },
];
