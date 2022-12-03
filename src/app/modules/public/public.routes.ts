import { Routes } from '@angular/router';

export const PublicRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];
