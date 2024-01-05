import { Component } from '@angular/core';
import { PostFacade } from '../../../../admin/pages/post/facades/post.facade';
import { Pagination } from '../../../../../core/entities/interfaces/pagination.interface';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../../admin/pages/post/entities/models/post.model';
import { Response } from 'src/app/core/entities';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
		trigger('slide-in-down', [
			transition(':enter', [
				style({ transform: 'translateY(-100%)' }),
				animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
			]),
			transition(':leave', [animate('500ms ease-in', style({ transform: 'translateY(-100%)' }))])
		]),
		trigger('fade-in', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('500ms ease-in', style({ opacity: 1 }))
			]),
			transition(':leave', [animate('500ms ease-in', style({ opacity: 0 }))])
		]),
		trigger('bounce-in', [
			transition(':enter', [
				style({ transform: 'translateY(-50%)' }),
				animate('5000ms ease-in', style({ transform: 'translateY(0%)' }))
			]),
			transition(':leave', [animate('500ms ease-in', style({ transform: 'translateY(-50%)' }))])
		])
	]
})
export class HomeComponent {
	public findAllResponse$: Observable<Response<Post[]> | null>;
	public findAllIsLoading$: Observable<boolean>;

	private subscriptors: Subscription[] = [];
	public dataPost: any = [];

	public page!: number;

	private readonly pagination: Pagination = {
		limit: 10000,
		offset: 0,
		filter: 'ALL'
	};

	constructor(private readonly postFacade: PostFacade) {
		this.findAllResponse$ = this.postFacade.findAllResponse$;
		this.findAllIsLoading$ = this.postFacade.findAllIsLoading$;
	}

	ngOnInit(): void {
		this.postFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<any[]> | null) => {
					this.dataPost = response?.data.filter((data) => {
						if (data.post_estado) {
							return data;
						}
					});
				}
			})
		);
	}
}
