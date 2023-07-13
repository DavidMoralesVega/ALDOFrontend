import { Pipe, PipeTransform } from '@angular/core';
import { ZListContract, ZC_Preload } from '../../entities/constants/app.route-names';

@Pipe({
	name: 'zDataSet'
})
export class DataSetPipe implements PipeTransform {
	transform(value: string | number, module: string, ref?: any): string {
		switch (module) {
			case 'listContract':
				return this.getFilter(value, ZListContract);

			default:
				return 'z-undefined';
		}
	}

	getFilter(value: string | number, data: ZC_Preload[]) {
		const zFilter: any = data.filter((f: any) => f.value === value);
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
