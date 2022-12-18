import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionalComponent } from './container/institutional.component';

const routes: Routes = [{ path: '', component: InstitutionalComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstitutionalRoutingModule {}
