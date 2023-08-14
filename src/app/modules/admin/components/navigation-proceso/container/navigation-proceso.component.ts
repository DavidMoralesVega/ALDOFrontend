import { Component, OnInit } from '@angular/core';
import { IZPath } from 'src/app/core/entities';
import { AuthFacade } from '../../../../auth/facades/auth.facade';
import { Router } from '@angular/router';
import { ZPathsProceso } from 'src/app/core/entities/constants/app.route-roles-names';

@Component({
	selector: 'z-navigation-proceso',
	templateUrl: './navigation-proceso.component.html'
})
export class NavigationProcesoComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPathsProceso;

	constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

	ngOnInit(): void {
		// this.authFacade.getUser();
	}

	logout() {
		this.router.navigateByUrl('/auth/user');
		// this.authFacade.logout();
	}
}
