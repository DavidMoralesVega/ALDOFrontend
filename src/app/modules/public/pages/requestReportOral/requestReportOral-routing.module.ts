import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestReportOralComponent } from './container/requestReportOral.component';

const routes: Routes = [{ path: '', component: RequestReportOralComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RequestReportOralRoutingModule {}
