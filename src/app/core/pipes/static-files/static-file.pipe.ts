import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'zStaticFile'
})
export class StaticFilesPipe implements PipeTransform {
	private ZPServerPoint: string = `http://192.168.1.101:3000/api/v1`;
	// private ZPServerPoint: string = `http://localhost:3000/api/v1`;

	transform(resource: string | undefined): string {
		if (resource !== undefined) {
			resource = resource.substring(2);
			return `${this.ZPServerPoint}/zephyrus-file-upload/${resource}`;
		}
		return 'No definido';
	}
}
