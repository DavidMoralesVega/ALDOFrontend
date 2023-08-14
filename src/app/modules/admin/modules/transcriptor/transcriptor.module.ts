import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranscriptorRoutingModule } from './transcriptor-routing.module';
import { TranscriptorComponent } from './container/transcriptor.component';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { AuthFacade } from 'src/app/modules/auth/facades/auth.facade';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { NavigationTranscriptorModule } from '../../components/navigation-transcriptor/navigation-transcriptor.module';

@NgModule({
	declarations: [TranscriptorComponent],
	imports: [CommonModule, TranscriptorRoutingModule, NavigationTranscriptorModule, AuthModule],
	providers: [AuthService, AuthFacade]
})
export class TranscriptorModule {}
