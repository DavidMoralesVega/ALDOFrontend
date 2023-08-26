import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './container/post.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ZEffects } from 'src/app/core/entities';
import { PostReducer } from './store/post.reducer';
import { PostEffects } from './store/post.effects';
import { PostService } from './services/post.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { PostFacade } from './facades/post.facade';
import { PostCreateModule } from './components/post-create/post-create.module';
import { PostUpdateModule } from './components/post-update/post-update.module';
import { CategoryModule } from '../category/category.module';
import { CategoryFacade } from '../category/facades/category.facade';
import { StaticFilePipeModule } from 'src/app/core/pipes/static-file/static-file.module';
import { StaticFileNewPipeModule } from 'src/app/core/pipes/static-file-new/static-file.module';

@NgModule({
	declarations: [PostComponent],
	imports: [
		CommonModule,
		PostRoutingModule,
		StoreModule.forFeature(ZEffects.post, PostReducer),
		EffectsModule.forFeature([PostEffects]),
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
		PostCreateModule,
		PostUpdateModule,
		CategoryModule,
		StaticFileNewPipeModule
	],
	providers: [PostService, MatSnackBarService, PostFacade, CategoryFacade],
	exports: [StoreModule, EffectsModule]
})
export class PostModule {}
