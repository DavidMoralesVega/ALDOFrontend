import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolutionsComponent } from './container/resolutions.component';

const routes: Routes = [{ path: '', component: ResolutionsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ResolutionsRoutingModule {}
