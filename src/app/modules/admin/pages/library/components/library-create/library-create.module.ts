import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCreateComponent } from './container/library-create.component';

@NgModule({
	declarations: [LibraryCreateComponent],
	imports: [CommonModule],
	exports: [LibraryCreateComponent]
})
export class LibraryCreateModule {}
