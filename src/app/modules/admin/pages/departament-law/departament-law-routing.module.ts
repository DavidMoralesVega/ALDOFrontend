import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentLawComponent } from './container/departament-law.component';

const routes: Routes = [{ path: '', component: DepartamentLawComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DepartamentLawRoutingModule {}
