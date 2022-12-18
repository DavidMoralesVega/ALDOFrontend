import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentLawsSearchRoutingModule } from './departament-law-search-routing.module';
import { DepartamentLawsSearchComponent } from './container/departament-law-search.component';
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

@NgModule({
	declarations: [DepartamentLawsSearchComponent],
	imports: [
		CommonModule,
		DepartamentLawsSearchRoutingModule,
		DepartamentLawModule,
		NgxPaginationModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [DepartamentLawFacade]
})
export class DepartamentLawsSearchModule {}
