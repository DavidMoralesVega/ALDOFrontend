import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogHeaderComponent } from './container/dialog-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [DialogHeaderComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule, MatTooltipModule],
	exports: [DialogHeaderComponent]
})
export class DialogHeaderModule {}
