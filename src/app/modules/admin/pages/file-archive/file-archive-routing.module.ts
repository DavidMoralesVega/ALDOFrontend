import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileArchiveComponent } from './container/file-archive.component';

const routes: Routes = [
	{
		path: '',
		component: FileArchiveComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FileArchiveRoutingModule {}
