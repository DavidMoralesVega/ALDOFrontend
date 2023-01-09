import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/core/shared/event/event-bus.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	private eventBusSub?: Subscription;

	constructor(private readonly eventBusService: EventBusService) {}

	ngOnInit(): void {
		this.eventBusSub = this.eventBusService.on('logout', () => {});
	}
}
