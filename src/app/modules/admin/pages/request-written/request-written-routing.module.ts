import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestWrittenComponent } from './container/request-written.component';

const routes: Routes = [{ path: '', component: RequestWrittenComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RequestWrittenRoutingModule {}
