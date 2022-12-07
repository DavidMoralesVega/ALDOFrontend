import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/entities/adapters/object.adapter';

export class RecognitionAdapter {
	constructor(
		public readonly IdRecognition: string,
		public readonly RTitle: string,
		public readonly RSummary: string,
		public readonly RPublicationDate: string,
		public readonly RIssueDate: string,
		public readonly RDocumentNumber: string,
		public readonly RFile: any,
		public readonly RVisibility: boolean,
		public readonly RState: boolean,
		public readonly RDateRegister: string
	) {}
}

export type CreateRecognitionDto = Omit<
	RecognitionAdapter,
	'IdRecognition' | 'RState' | 'RDateRegister'
>;

export interface UpdateRecognitionDto extends Partial<RecognitionAdapter> {}

@Injectable()
export class Recognition implements Adapter<RecognitionAdapter> {
	adapter(recognitionAdapter: RecognitionAdapter): RecognitionAdapter {
		return new RecognitionAdapter(
			recognitionAdapter.IdRecognition,
			recognitionAdapter.RTitle,
			recognitionAdapter.RSummary,
			recognitionAdapter.RPublicationDate,
			recognitionAdapter.RIssueDate,
			recognitionAdapter.RDocumentNumber,
			recognitionAdapter.RFile,
			recognitionAdapter.RVisibility,
			recognitionAdapter.RState,
			recognitionAdapter.RDateRegister
		);
	}
}
