import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './container/admin.component';
import { FooterModule } from './components/footer/footer.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { AuthFacade } from '../auth/facades/auth.facade';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/services/auth.service';
import { ZQuicklinkModule } from 'src/app/core/shared/z-quicklink.module';
// import { authInterceptorProviders } from '../../core/interceptors/user.interceptor';

@NgModule({
	declarations: [AdminComponent],
	imports: [
		ZQuicklinkModule,
		CommonModule,
		AdminRoutingModule,
		FooterModule,
		NavigationModule,
		AuthModule
	],
	providers: [
		AuthService,
		AuthFacade
		// authInterceptorProviders
	]
})
export class AdminModule {}
