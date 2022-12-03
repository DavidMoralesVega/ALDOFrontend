import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth-user/auth-user.module').then(
        (m) => m.AuthUserModule
      ),
  },
  {
    path: 'erp',
    loadChildren: () =>
      import('./pages/auth-erp/auth-erp.module').then((m) => m.AuthErpModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/auth-user/auth-user.module').then(
        (m) => m.AuthUserModule
      ),
  },
];
