import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './container/public.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
	declarations: [PublicComponent],
	imports: [CommonModule, PublicRoutingModule, NavbarModule, FooterModule]
})
export class PublicModule {}
