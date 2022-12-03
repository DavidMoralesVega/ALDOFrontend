import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCreateComponent } from './container/category-create.component';

@NgModule({
	declarations: [CategoryCreateComponent],
	imports: [CommonModule],
	exports: [CategoryCreateComponent]
})
export class CategoryCreateModule {}
