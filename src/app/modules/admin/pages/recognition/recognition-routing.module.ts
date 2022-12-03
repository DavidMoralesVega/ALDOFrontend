import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecognitionComponent } from './container/recognition.component';

const routes: Routes = [{ path: '', component: RecognitionComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecognitionRoutingModule {}
