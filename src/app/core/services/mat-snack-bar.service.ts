import { Injectable } from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Injectable()
export class MatSnackBarService {
	private readonly duration: number = 6000;
	private readonly verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	private readonly horizontalPosition: MatSnackBarHorizontalPosition = 'end';
	private panelClass: string = '';

	constructor(private readonly matSnackBar: MatSnackBar) {}

	open = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
		switch (type) {
			case 'success':
				this.panelClass = 'success-snackbar';
				break;
			case 'error':
				this.panelClass = 'error-snackbar';
				break;
			case 'warning':
				this.panelClass = 'warning-snackbar';
				break;
			case 'info':
				this.panelClass = 'info-snackbar';
				break;
		}
		this.matSnackBar.open(message, 'Cerrar', {
			duration: this.duration,
			verticalPosition: this.verticalPosition,
			horizontalPosition: this.horizontalPosition,
			panelClass: this.panelClass
		});
	};

	// MessageType(error: any) {
	//     let messageConfig = '';
	//     switch (error.code) {
	//         case 'auth/user-not-found':
	//             messageConfig = 'No hay ningún registro de usuario que corresponda a este identificador.';
	//             break;
	//         case 'auth/wrong-password':
	//             messageConfig = 'La contraseña no es válida o el usuario no tiene contraseña.';
	//             break;
	//         case 'auth/email-already-in-use':
	//             messageConfig = 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.';
	//             break;
	//         case 'auth/too-many-requests':
	//             messageConfig = 'El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.';
	//             break;
	//         default:
	//             messageConfig = error.message;
	//             break;
	//     }
	//     this.ShowMessage('error', messageConfig);
	// }
}
