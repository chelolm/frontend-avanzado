import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatDividerModule, 
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatDividerModule, 
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatDividerModule, 
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
})
export class MaterialModule { }

/*
import { FlexLayoutModule } from '@angular/flex-layout';
 import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material'; */
