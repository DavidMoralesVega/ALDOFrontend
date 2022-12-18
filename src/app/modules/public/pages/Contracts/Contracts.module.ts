import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './Contracts-routing.module';
import { ContractsComponent } from './container/Contracts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContractModule } from 'src/app/modules/admin/pages/contract/contract.module';
import { ContractFacade } from 'src/app/modules/admin/pages/contract/facades/contract.facade';
import { StaticFilePipeModule } from '../../../../core/pipes/static-file/static-file.module';

@NgModule({
	declarations: [ContractsComponent],
	imports: [
		CommonModule,
		ContractsRoutingModule,
		ContractModule,
		NgxPaginationModule,
		StaticFilePipeModule
	],
	providers: [ContractFacade]
})
export class ContractsModule {}
