import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoSupervisorRoutingModule } from './tecnico-supervisor-routing.module';
import { TecnicoSupervisorComponent } from './container/tecnico-supervisor.component';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { NavigationTecnicoSupervisorModule } from '../../components/navigation-tecnico-supervisor/navigation-tecnico-supervisor.module';

@NgModule({
	declarations: [TecnicoSupervisorComponent],
	imports: [
		CommonModule,
		TecnicoSupervisorRoutingModule,
		NavigationTecnicoSupervisorModule,
		AuthModule
	],
	providers: [AuthService, AuthFacade]
})
export class TecnicoSupervisorModule {}
