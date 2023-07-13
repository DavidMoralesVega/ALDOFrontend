import { OnDestroy, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

export class Response<T> {
	isArray: boolean;
	path: string;
	duration: string;
	method: string;
	data: T;

	constructor(isArray: boolean, path: string, duration: string, method: string, data: T) {
		this.isArray = isArray;
		this.path = path;
		this.duration = duration;
		this.method = method;
		this.data = data;
	}
}
@Injectable()
export class ZBaseService implements OnDestroy, ErrorStateMatcher {
	private subscriptions: Subscription[] = [];

	// public zForm: FormGroup = new FormGroup({});

	ngOnDestroy(): void {
		this.unsubscribeAll();
	}

	generarNumeroAleatorio(): string {
		const imgN = Math.floor(Math.random() * 1) + 1;
		return `assets/education/${imgN}.jpeg`;
	}

	protected subscribeUntilDestroyed(observable$: Subscription): Subscription {
		this.subscriptions.push(observable$);
		return observable$;
	}

	private unsubscribeAll(): void {
		while (this.subscriptions.length > 0) {
			const subscription = this.subscriptions.shift();
			if (subscription) {
				subscription.unsubscribe();
			}
		}
	}

	isErrorState(
		control: AbstractControl | FormControl | null,
		form: FormGroupDirective | NgForm | null
	): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}

	closeDialog(observable: Observable<Response<any> | null>, matDialogRef: MatDialogRef<any>) {
		this.subscribeUntilDestroyed(
			observable.subscribe({
				next: (z: Response<any> | null) => {
					if (z != null) {
						matDialogRef.close();
					}
				}
			})
		);
	}
}
