import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuridicosAdministrativosComponent } from './container/juridicos-administrativos.component';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { JuridicosAdminsitrativosRoutingModule } from './juridicos-administrativos-routing.module';
import { NavigationJuridicosAdministrativosModule } from '../../components/navigation-juridicos-administrativos/navigation-juridicos-administrativos.module';

@NgModule({
	declarations: [JuridicosAdministrativosComponent],
	imports: [
		CommonModule,
		JuridicosAdminsitrativosRoutingModule,
		NavigationJuridicosAdministrativosModule,
		AuthModule
	],
	providers: [AuthService, AuthFacade]
})
export class JuridicosAdministrativosModule {}
