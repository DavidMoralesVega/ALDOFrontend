import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileArchiveRoutingModule } from './file-archive-routing.module';
import { FileArchiveComponent } from './container/file-archive.component';
import { StoreModule } from '@ngrx/store';
import { ZEffects } from 'src/app/core/entities';
import { FilesArchiveReducer } from './store/file-archive.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FilesArchiveEffects } from './store/file-archive.effects';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StaticFilePipeModule } from 'src/app/core/pipes/static-file/static-file.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FilesArchiveService } from './services/file-archive.service';
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { FilesArchiveFacade } from './facades/file-archive.facade';
import { LegislatureModule } from '../legislature/legislature.module';
import { DataSetPipeModule } from 'src/app/core/pipes/data-set/data-set.module';
import { FileArchiveCreateUpdateModule } from './components/createUpdate/createUpdate.module';

@NgModule({
	declarations: [FileArchiveComponent],
	imports: [
		CommonModule,
		FileArchiveRoutingModule,
		StoreModule.forFeature(ZEffects.fileArchive, FilesArchiveReducer),
		EffectsModule.forFeature([FilesArchiveEffects]),
		MatDialogModule,
		MatTableModule,
		MatIconModule,
		MatPaginatorModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		FileArchiveCreateUpdateModule,
		StaticFilePipeModule,
		DataSetPipeModule,
		LegislatureModule
	],
	providers: [FilesArchiveService, MatSnackBarService, FilesArchiveFacade],
	exports: [StoreModule, EffectsModule]
})
export class FileArchiveModule {}
