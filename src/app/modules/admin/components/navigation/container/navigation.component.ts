import { Component, OnInit } from '@angular/core';
import { IZPath, ZPaths } from 'src/app/core/entities';
import { TokenStorageService } from 'src/app/core/services/token.service';
import { AuthFacade } from '../../../../auth/facades/auth.facade';

@Component({
	selector: 'z-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPaths;

	constructor(private readonly authFacade: AuthFacade) {}

	ngOnInit(): void {
		// this.authFacade.getUser();
	}

	logout() {
		console.log('salir');
		this.authFacade.logout();
	}
}
