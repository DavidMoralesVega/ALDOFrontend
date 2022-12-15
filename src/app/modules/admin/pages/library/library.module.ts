import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './container/library.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from '../../../../core/entities/enums/effects.enum';
import { LibraryReducer } from './store/library.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LibraryEffects } from './store/library.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { LibraryCreateModule } from './components/library-create/library-create.module';
import { LibraryUpdateModule } from './components/library-update/library-update.module';
import { LibraryService } from './services/library.service';
import { MatSnackBarService } from '../../../../core/services/mat-snack-bar.service';
import { LibraryFacade } from './facades/library.facade';

@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		LibraryRoutingModule,
		DatePipe,
		StoreModule.forFeature(ZEffects.library, LibraryReducer),
		EffectsModule.forFeature([LibraryEffects]),
		MatSnackBarModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		// GET PIPE STATIC FILE
		StaticFilePipeModule,
		MatChipsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		LibraryCreateModule,
		LibraryUpdateModule
	],
	providers: [LibraryService, MatSnackBarService, LibraryFacade],
	exports: [StoreModule, EffectsModule]
})
export class LibraryModule {}
