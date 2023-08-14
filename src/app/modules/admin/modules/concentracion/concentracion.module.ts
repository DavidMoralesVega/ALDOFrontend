import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcentracionRoutingModule } from './concentracion-routing.module';
import { ConcentracionComponent } from './container/concentracion.component';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { NavigationConcentracionModule } from '../../components/navigation-concentracion/navigation-concentracion.module';

@NgModule({
	declarations: [ConcentracionComponent],
	imports: [CommonModule, ConcentracionRoutingModule, NavigationConcentracionModule, AuthModule],
	providers: [AuthService, AuthFacade]
})
export class ConcentracionModule {}
