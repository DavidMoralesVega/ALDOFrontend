import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DefaultErrorMatcher } from 'src/app/core/shared/default.error-matcher';
import { ZBaseService } from 'src/app/core/services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ZDialogAction, ZPayloadDialog } from 'src/app/core/utils/adapters/Object.adapter';
import { UserFacade } from '../../../facades/user.facade';
import { CreateUserDto, UpdateAdminUserDto, UserAdapter } from '../../../entities';
import { ZListRoles } from 'src/app/core/entities';

@Component({
	selector: 'z-user-createUpdate',
	templateUrl: './createUpdate.component.html'
})
export class UserCreateUpdateComponent extends ZBaseService {
	public readonly errorMatcher: DefaultErrorMatcher = new DefaultErrorMatcher();
	public zForm: FormGroup = new FormGroup({});
	public createIsLoading$: Observable<boolean>;
	title: string = '';
	public ZListRoles: any[] = ZListRoles;

	public paths: any[] = [];
	private readonly matDialog = inject(MatDialog);
	public rolValue: string | undefined = '';
	private readonly dialogRef = inject(MatDialogRef<UserCreateUpdateComponent>);
	constructor(
		private readonly userFacade: UserFacade,
		@Inject(MAT_DIALOG_DATA) readonly payloadDialog: ZPayloadDialog<UserAdapter>
	) {
		super();
		this.title =
			this.payloadDialog.action === ZDialogAction.create
				? 'Crear Usuario'
				: 'Actualizar Usuario';

		this.createIsLoading$ = userFacade.createIsLoading$;
	}
	ngOnInit(): void {
		this.initFormCreate();
	}
	initFormCreate(): void {
		this.zForm = new FormGroup({
			Email: new FormControl('', []),
			Password: new FormControl('', []),
			FullName: new FormControl('', []),
			celCorp: new FormControl('', []),
			Roles: new FormControl('', [])
		});

		if (this.payloadDialog.action === ZDialogAction.update && this.payloadDialog) {
			const { z } = this.payloadDialog;
			const Password = '';
			this.zForm.patchValue({ ...z, Password });
		}
	}

	get Email() {
		return this.zForm.get('Email')!;
	}
	get Password() {
		return this.zForm.get('Password')!;
	}
	get FullName() {
		return this.zForm.get('FullName')!;
	}
	get celCorp() {
		return this.zForm.get('celCorp')!;
	}
	get Roles() {
		return this.zForm.get('Roles')!;
	}

	action(): void {
		if (this.zForm.invalid) return;
		this.payloadDialog.action === ZDialogAction.create ? this.create() : this.update();
	}

	private getCreateUpdateInput(): CreateUserDto {
		return {
			Email: this.Email.value,
			FullName: this.FullName.value,
			Password: this.Password.value,
			celCorp: this.celCorp.value.toString(),
			Roles: this.Roles.value
		};
	}

	private create(): void {
		const createUserDto: CreateUserDto = this.getCreateUpdateInput();
		this.userFacade.create(createUserDto);
		this.closeDialog(this.userFacade.createResponse$, this.dialogRef);
	}

	private update(): void {
		const updateUserDto: UpdateAdminUserDto = {
			...this.getCreateUpdateInput()
		};

		this.userFacade.update(this.payloadDialog.z.IdUser, updateUserDto);
		this.closeDialog(this.userFacade.updateResponse$, this.dialogRef);
	}
}
