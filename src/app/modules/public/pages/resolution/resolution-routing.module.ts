import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolutionComponent } from './container/resolution.component';

const routes: Routes = [{ path: '', component: ResolutionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ResolutionRoutingModule {}
