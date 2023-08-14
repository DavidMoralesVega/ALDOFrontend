import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
	selector: 'zephyrus-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'frontend';

	ngOnInit() {
		Aos.init();
	}
}
