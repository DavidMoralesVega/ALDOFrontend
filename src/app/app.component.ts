import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
	selector: 'zephyrus-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';

	ngOnInit() {
		Aos.init();
	}
}
