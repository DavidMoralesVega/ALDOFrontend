import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestReportsComponent } from './container/request-reports.component';

const routes: Routes = [{ path: '', component: RequestReportsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RequestReportsRoutingModule {}
