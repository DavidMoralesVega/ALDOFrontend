import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './container/auth.component';
import { AuthRoutes } from './auth.routes';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: AuthRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
