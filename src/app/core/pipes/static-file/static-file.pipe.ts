import { Pipe, PipeTransform } from '@angular/core';
import { point } from 'src/environments/environment';

@Pipe({
	name: 'staticFile'
})
export class StaticFilePipe implements PipeTransform {
	private ZPServerPoint: string = point.server;

	transform(resource: string): string {
		// return `${this.ZPServerPoint}/files/static/${resource}`;

		return `${this.ZPServerPoint}/${resource}`;
	}
}
