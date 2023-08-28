import { Component, OnInit } from '@angular/core';
import { IZPath } from 'src/app/core/entities';
import { AuthFacade } from '../../../../auth/facades/auth.facade';
import { Router } from '@angular/router';
import { ZPathsAdministrador } from 'src/app/core/entities/constants/app.route-roles-names';

@Component({
	selector: 'z-navigation-administrador',
	templateUrl: './navigation-Administrador.component.html'
})
export class NavigationBlogComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPathsAdministrador;

	constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

	ngOnInit(): void {}

	logout() {
		this.router.navigateByUrl('/auth/user');
	}
}
