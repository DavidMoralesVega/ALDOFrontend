import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorBlogComponent } from './container/administrador-blog.component';
import { AdministradoBlogRoutingModule } from './administrador-blog-routing.module';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { NavigationBlogModule } from '../../components/navigation-blog/navigation-blog.module';

@NgModule({
	declarations: [AdministradorBlogComponent],
	imports: [CommonModule, AdministradoBlogRoutingModule, NavigationBlogModule, AuthModule],
	providers: [AuthService, AuthFacade]
})
export class AdministradorBlogModule {}
