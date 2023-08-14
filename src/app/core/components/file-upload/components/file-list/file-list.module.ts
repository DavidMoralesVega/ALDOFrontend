import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './container/file-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { StaticFilesPipeModule } from 'src/app/core/pipes/static-files/static-file.module';

@NgModule({
	declarations: [FileListComponent],
	imports: [
		CommonModule,
		MatIconModule,
		MatProgressBarModule,
		MatButtonModule,
		StaticFilesPipeModule
	],
	exports: [FileListComponent]
})
export class FileListModule {}
