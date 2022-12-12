import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './Contracts-routing.module';
import { ContractsComponent } from './container/Contracts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContractModule } from 'src/app/modules/admin/pages/contract/contract.module';
import { ContractFacade } from 'src/app/modules/admin/pages/contract/facades/contract.facade';

@NgModule({
	declarations: [ContractsComponent],
	imports: [CommonModule, ContractsRoutingModule, ContractModule, NgxPaginationModule],
	providers: [ContractFacade]
})
export class ContractsModule {}
