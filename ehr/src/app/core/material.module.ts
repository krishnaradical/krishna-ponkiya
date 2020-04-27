import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,
   MatNativeDateModule, MatSidenavModule,MatListModule,MatSelectModule, MatButtonToggleModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTabsModule
} from '@angular/material';
import { MenuListItemComponent } from "../shared/menu-list-item/menu-list-item.component";
import { PatientSearchHomeComponent } from "../maincomponents/patient-search-home/patient-search-home.component";
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatTabsModule,
   
 
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatFormFieldModule,
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatNativeDateModule,
   MatSidenavModule,
   MatListModule,
   MatSelectModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatListModule,
   MatToolbarModule,
   MatButtonToggleModule,
  
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MenuListItemComponent,
    PatientSearchHomeComponent

   ],
declarations: [
    MenuListItemComponent,
    PatientSearchHomeComponent
],

   
})
export class CustomMaterialModule { }