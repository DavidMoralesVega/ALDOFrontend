import { Component, OnInit } from '@angular/core';
import { IZPath } from 'src/app/core/entities';
import { AuthFacade } from '../../../../auth/facades/auth.facade';
import { Router } from '@angular/router';
import { ZPathsJuridicosAdministrativos } from 'src/app/core/entities/constants/app.route-roles-names';

@Component({
	selector: 'z-navigation-juridicos-administrativos',
	templateUrl: './navigation-juridicos-administrativos.component.html'
})
export class NavigationJuridicosAdministrativosComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPathsJuridicosAdministrativos;

	constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

	ngOnInit(): void {
		// this.authFacade.getUser();
	}

	logout() {
		this.router.navigateByUrl('/auth/user');
		// this.authFacade.logout();
	}
}
