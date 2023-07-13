import { Pipe, PipeTransform } from '@angular/core';
import {
	ZListContract,
	ZC_Preload,
	ZListModalidad,
	ZListSesiones,
	ZListArea,
	ZListResolutions,
	ZListRoles
} from '../../entities/constants/app.route-names';

@Pipe({
	name: 'zDataSet'
})
export class DataSetPipe implements PipeTransform {
	transform(value: string | number, module: string, ref?: any): string {
		switch (module) {
			case 'listContract':
				return this.getFilter(value, ZListContract);

			case 'listModalidad':
				return this.getFilter(value, ZListModalidad);

			case 'listSesiones':
				return this.getFilter(value, ZListSesiones);

			case 'listArea':
				return this.getFilter(value, ZListArea);

			case 'listResolutions':
				return this.getFilter(value, ZListResolutions);

			case 'listRoles':
				return this.getFilter(value, ZListRoles);

			default:
				return 'z-undefined';
		}
	}

	getFilter(value: string | number, data: ZC_Preload[]) {
		const zFilter: any = data.filter((f: any) => f.value == value);
		return zFilter?.[0]?.key || 'No definido';
	}

	getFilterChildren(value: string | number, data: ZC_Preload[], ref: any) {
		const resultRef = this.getFilterRef(ref, data);
		const zFilter: any = resultRef.children.filter((f: any) => f.value === value);
		return zFilter?.[0]?.key || 'No definido';
	}

	getFilterRef(ref: any, data: ZC_Preload[]) {
		const zFilter: any = data.filter((f: any) => f.value === ref);
		return zFilter?.[0] || 'No definido';
	}
}
