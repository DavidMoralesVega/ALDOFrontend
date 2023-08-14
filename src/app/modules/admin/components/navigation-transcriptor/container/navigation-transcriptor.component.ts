import { Component, OnInit } from '@angular/core';
import { IZPath } from 'src/app/core/entities';
import { AuthFacade } from '../../../../auth/facades/auth.facade';
import { Router } from '@angular/router';
import { ZPathsTranscriptor } from 'src/app/core/entities/constants/app.route-roles-names';

@Component({
	selector: 'z-navigation-transcriptor',
	templateUrl: './navigation-transcriptor.component.html'
})
export class NavigationTranscriptorComponent implements OnInit {
	public readonly zPaths: IZPath[] = ZPathsTranscriptor;

	constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

	ngOnInit(): void {
		// this.authFacade.getUser();
	}

	logout() {
		this.router.navigateByUrl('/auth/user');
		// this.authFacade.logout();
	}
}
