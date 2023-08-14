import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './container/administrador.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { NavigationAdministradorModule } from '../../components/navigation-Administrador/navigation-Administrador.module';

@NgModule({
	declarations: [AdministradorComponent],
	imports: [CommonModule, AdministradorRoutingModule, NavigationAdministradorModule, AuthModule],
	providers: [AuthService, AuthFacade]
})
export class AdministradorModule {}
