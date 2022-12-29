import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRecognitionRoutingModule } from './manageRecognition-routing.module';
import { ManageRecognitionComponent } from './container/manageRecognition.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecognitionFacade } from 'src/app/modules/admin/pages/recognition/facades/recognition.facade';
import { RecognitionModule } from 'src/app/modules/admin/pages/recognition/recognition.module';
import { LineZModule } from '../../../../core/components/line-z/line-z.module';

@NgModule({
	declarations: [ManageRecognitionComponent],
	imports: [
		CommonModule,
		ManageRecognitionRoutingModule,
		RecognitionModule,
		NgxPaginationModule,
		LineZModule
	],
	providers: [RecognitionFacade]
})
export class ManageRecognitionModule {}
