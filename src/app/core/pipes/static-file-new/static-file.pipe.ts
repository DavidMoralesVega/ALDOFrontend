import { Pipe, PipeTransform } from '@angular/core';
import { point } from 'src/environments/environment';

@Pipe({
	name: 'staticFileNew'
})
export class StaticFilePipe implements PipeTransform {
	private ZPServerPoint: string = point.server;

	transform(resource: string): string {
		// return `${this.ZPServerPoint}/files/static/${resource}`;
		// console.log(`${this.ZPServerPoint}/${resource}`);
		return `${this.ZPServerPoint}/zephyrus-file-upload/${resource}`;
		// return `${this.ZPServerPoint}/${resource}`;
	}
}
