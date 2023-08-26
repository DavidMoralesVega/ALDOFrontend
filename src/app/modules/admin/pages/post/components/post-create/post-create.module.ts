import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './container/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { JsonAsyncModule } from 'src/app/core/pipes/json-async/json-async.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UploadInputTypeImageModule } from 'src/app/core/components/upload-input-type-img/upload-input-type-image.module';
import { FileListModule, FileUploadModule } from 'src/app/core/components/file-upload/z';

@NgModule({
	declarations: [PostCreateComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		JsonAsyncModule,
		MatProgressSpinnerModule,
		UploadInputTypeImageModule,
		FileListModule,
		FileUploadModule
	]
})
export class PostCreateModule {}
