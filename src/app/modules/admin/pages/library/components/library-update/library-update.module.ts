import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryUpdateComponent } from './container/library-update.component';

@NgModule({
	declarations: [LibraryUpdateComponent],
	imports: [CommonModule],
	exports: [LibraryUpdateComponent]
})
export class LibraryUpdateModule {}
