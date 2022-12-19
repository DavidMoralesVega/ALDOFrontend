import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegislatureComponent } from './container/legislature.component';

const routes: Routes = [{ path: '', component: LegislatureComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LegislatureRoutingModule {}
