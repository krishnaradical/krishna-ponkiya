import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsPasswordConfigurationsRoutingModule } from './global-settings-password-configurations-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsPasswordConfigurationsComponent } from './global-settings-password-configurations.component';

@NgModule({
  declarations: [
    GlobalSettingsPasswordConfigurationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsPasswordConfigurationsRoutingModule
  ]
})
export class GlobalSettingsPasswordConfigurationsModule { }
