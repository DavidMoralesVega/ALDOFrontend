import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Pagination } from 'src/app/core/entities';
import { Response } from '../../../../../core/entities/interfaces/response.interface';
import { UserCreateComponent } from '../components/user-create/container/user-create.component';
import { User, UserAdapter, UpdateUserDto } from '../entities/models/user.model';
import { UserFacade } from '../facades/user.facade';

@Component({
	selector: 'z-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	public findAllResponse$: Observable<Response<User[]> | null>;
	public findAllIsLoading$: Observable<boolean>;
	public updateIsLoading$: Observable<boolean>;

	public dataSource!: MatTableDataSource<User>;
	private subscriptors: Subscription[] = [];

	public readonly displayedColumns: string[] = [
		'IdUser',
		'Email',
		'FullName',
		'IsActive',
		'celCorp',
		'Roles'
	];

	private readonly pagination: Pagination = {
		limit: 100000,
		offset: 0,
		filter: 'ALL'
	};

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(private readonly userFacade: UserFacade, private readonly matDialog: MatDialog) {
		this.findAllResponse$ = this.userFacade.findAllResponse$;
		this.findAllIsLoading$ = this.userFacade.findAllIsLoading$;
		this.updateIsLoading$ = this.userFacade.updateIsLoading$;
	}

	ngOnInit(): void {
		this.userFacade.findAll(this.pagination);
	}

	ngAfterViewInit(): void {
		this.findAll();
	}

	findAll() {
		this.subscriptors.push(
			this.findAllResponse$.subscribe({
				next: (response: Response<User[]> | null) => {
					console.log(response);

					setTimeout(() => {
						this.dataSource = new MatTableDataSource(response?.data);
						this.dataSource.paginator = this.paginator;
						this.dataSource.sort = this.sort;
					}, 10);
				}
			})
		);
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
	}

	changeState(userAdapter: UserAdapter) {
		const updateUserDto: UpdateUserDto = {
			IsActive: !userAdapter.IsActive
		};

		this.userFacade.update(userAdapter.IdUser, updateUserDto);

		setTimeout(() => {
			this.userFacade.findAll(this.pagination);
			this.findAll();
		}, 100);
	}

	openUserCreate(): void {
		const dialogRef = this.matDialog.open(UserCreateComponent, {
			width: '500px',
			// height: '400px',
			maxWidth: '80%',
			maxHeight: '100%'
		});

		dialogRef.afterClosed().subscribe(() => this.userFacade.findAll(this.pagination));
	}
}
