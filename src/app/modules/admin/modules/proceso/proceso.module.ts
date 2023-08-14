import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesoRoutingModule } from './proceso-routing.module';
import { ProcesoComponent } from './container/proceso.component';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { NavigationProcesoModule } from '../../components/navigation-proceso/navigation-proceso.module';

@NgModule({
	declarations: [ProcesoComponent],
	imports: [CommonModule, ProcesoRoutingModule, NavigationProcesoModule, AuthModule],
	providers: [AuthService, AuthFacade]
})
export class ProcesoModule {}
