import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/core/shared/event/event-bus.service';

@Component({
	selector: 'app-admin',
	templateUrl: './tecnico-supervisor.component.html'
})
export class TecnicoSupervisorComponent implements OnInit {
	private eventBusSub?: Subscription;

	constructor(private readonly eventBusService: EventBusService) {}

	ngOnInit(): void {
		this.eventBusSub = this.eventBusService.on('logout', () => {});
	}
}