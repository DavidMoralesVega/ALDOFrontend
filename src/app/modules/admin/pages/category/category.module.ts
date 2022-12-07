import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './container/category.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ZEffects } from 'src/app/core/entities';
import { CategoryReducer } from './store/category.reducer';
import { CategoryEffects } from './store/category.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { CategoryService } from './services/category.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoryCreateModule } from './components/category-create/category-create.module';
import { CategoryUpdateModule } from './components/category-update/category-update.module';
import { CategoryFacade } from './facades/category.facade';

@NgModule({
	declarations: [CategoryComponent],
	imports: [
		CommonModule,
		CategoryRoutingModule,
		StoreModule.forFeature(ZEffects.category, CategoryReducer),
		EffectsModule.forFeature([CategoryEffects]),
		MatSnackBarModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		CategoryCreateModule,
		CategoryUpdateModule
	],
	providers: [CategoryService, MatSnackBarService, CategoryFacade],
	exports: [StoreModule, EffectsModule]
})
export class CategoryModule {}
