import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentLawsSearchComponent } from './container/departament-law-search.component';

const routes: Routes = [{ path: '', component: DepartamentLawsSearchComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DepartamentLawsSearchRoutingModule {}
