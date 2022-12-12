import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentLawsRoutingModule } from './departamentLaws-routing.module';
import { DepartamentLawsComponent } from './container/departamentLaws.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartamentLawModule } from 'src/app/modules/admin/pages/departament-law/departament-law.module';
import { DepartamentLawFacade } from 'src/app/modules/admin/pages/departament-law/facades/departament-law.facade';

@NgModule({
	declarations: [DepartamentLawsComponent],
	imports: [CommonModule, DepartamentLawsRoutingModule, DepartamentLawModule, NgxPaginationModule],
	providers: [DepartamentLawFacade]
})
export class DepartamentLawsModule {}
