import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './container/public.component';
import { ZQuicklinkModule } from 'src/app/core/shared/z-quicklink.module';

@NgModule({
	declarations: [PublicComponent],
	imports: [ZQuicklinkModule, CommonModule, PublicRoutingModule]
})
export class PublicModule {}
