import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogActionsComponent } from './container/dialog-actions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [DialogActionsComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
	exports: [DialogActionsComponent]
})
export class DialogActionsModule {}
