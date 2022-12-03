import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'jsonData'
})
export class JsonAsyncPipe implements PipeTransform {
	transform(jsonData: any, item: string): string {
		return jsonData[item];
	}
}
