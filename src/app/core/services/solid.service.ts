import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class SolidService {
	constructor() {}
	validate(form: FormGroup): boolean {
		if (form.invalid) {
			for (const control of Object.keys(form.controls)) {
				form.controls[control].markAsTouched();
			}
			return false;
		}
		return true;
	}
}
