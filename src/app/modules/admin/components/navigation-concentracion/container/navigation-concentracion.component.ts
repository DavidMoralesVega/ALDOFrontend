import { Component, OnInit } from '@angular/core';
import { IZPath } from 'src/app/core/entities';
import { AuthFacade } from '../../../../auth/facades/auth.facade';
import { Router } from '@angular/router';
import { ZPathsConcentracion } from 'src/app/core/entities/constants/app.route-roles-names';

@Component({
	selector: 'z-navigation-Concentracion',
	templateUrl: './navigation-concentracion.component.html'
})
export class NavigationConcentracionComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPathsConcentracion;

	constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

	ngOnInit(): void {
		// this.authFacade.getUser();
	}

	logout() {
		this.router.navigateByUrl('/auth/user');
		// this.authFacade.logout();
	}
}
