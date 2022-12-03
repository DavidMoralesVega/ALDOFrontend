import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthErpComponent } from './container/auth-erp.component';

const routes: Routes = [{ path: '', component: AuthErpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthErpRoutingModule {}
