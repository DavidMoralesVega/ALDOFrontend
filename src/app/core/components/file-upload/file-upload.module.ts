import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './container/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ZUploadffects } from './store/file-upload.effects';
import { ZUploadReducer } from './store/file-upload.reducer';
import { ZUploadService } from './services/file-upload.service';
import { ZUploadFacade } from './facades/file-upload.facade';
import { ZDndDirective } from './directives/dropzone.directive';
import { ZEffects } from '../../entities';
import { DialogActionsModule, DialogHeaderModule } from '../dialog/z';
import { FileListModule } from './z';

@NgModule({
	declarations: [FileUploadComponent, ZDndDirective],
	imports: [
		StoreModule.forFeature(ZEffects.fileupload, ZUploadReducer),
		EffectsModule.forFeature([ZUploadffects]),
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatProgressBarModule,
		FileListModule,
		DialogHeaderModule,
		DialogActionsModule
	],
	providers: [ZUploadService, ZUploadFacade],
	exports: [FileUploadComponent]
})
export class FileUploadModule {}
