import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentLawsComponent } from './container/departamentLaws.component';

const routes: Routes = [{ path: '', component: DepartamentLawsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DepartamentLawsRoutingModule {}
