import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentLawsRoutingModule } from './departamentLaws-routing.module';
import { DepartamentLawsComponent } from './container/departamentLaws.component';
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
import { JsonAsyncModule } from '../../../../core/pipes/json-async/json-async.module';
import { LegislatureModule } from '../../../admin/pages/legislature/legislature.module';
import { LegislatureFacade } from '../../../admin/pages/legislature/facades/legislature.facade';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';
import { ZBannerModule } from 'src/app/modules/admin/components/banner/banner.module';

@NgModule({
	declarations: [DepartamentLawsComponent],
	imports: [
		CommonModule,
		DepartamentLawsRoutingModule,
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
		MatNativeDateModule,
		JsonAsyncModule,
		LegislatureModule,
		LineZModule,
		ZBannerModule
	],
	providers: [DepartamentLawFacade, LegislatureFacade]
})
export class DepartamentLawsModule {}
