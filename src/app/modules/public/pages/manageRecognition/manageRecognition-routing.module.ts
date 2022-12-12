import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRecognitionComponent } from './container/manageRecognition.component';

const routes: Routes = [{ path: '', component: ManageRecognitionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageRecognitionRoutingModule {}
