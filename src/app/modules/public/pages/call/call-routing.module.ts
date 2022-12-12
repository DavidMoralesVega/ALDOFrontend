import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPComponent } from './container/call.component';

const routes: Routes = [{ path: '', component: CallPComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CallPRoutingModule {}
