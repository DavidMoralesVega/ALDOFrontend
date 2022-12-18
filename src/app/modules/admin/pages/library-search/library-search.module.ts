import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarySearchRoutingModule } from './library-search-routing.module';
import { LibrarySearchComponent } from './container/library-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartamentLawModule } from 'src/app/modules/admin/pages/departament-law/departament-law.module';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LibraryFacade } from '../library/facades/library.facade';
import { LibraryModule } from '../library/library.module';

@NgModule({
	declarations: [LibrarySearchComponent],
	imports: [
		CommonModule,
		LibrarySearchRoutingModule,
		NgxPaginationModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		LibraryModule
	],
	providers: [LibraryFacade]
})
export class LibrarySearchModule {}
