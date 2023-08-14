import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/core/shared/event/event-bus.service';

@Component({
	selector: 'app-admin',
	templateUrl: './concentracion.component.html'
})
export class ConcentracionComponent implements OnInit {
	private eventBusSub?: Subscription;

	constructor(private readonly eventBusService: EventBusService) {}

	ngOnInit(): void {
		this.eventBusSub = this.eventBusService.on('logout', () => {});
	}
}
