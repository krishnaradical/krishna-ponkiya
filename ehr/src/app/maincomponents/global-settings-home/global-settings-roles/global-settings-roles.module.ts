import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsRolesRoutingModule } from './global-settings-roles-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsRolesComponent } from './global-settings-roles.component';

@NgModule({
  declarations: [
    GlobalSettingsRolesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsRolesRoutingModule
  ]
})
export class GlobalSettingsRolesModule { }
