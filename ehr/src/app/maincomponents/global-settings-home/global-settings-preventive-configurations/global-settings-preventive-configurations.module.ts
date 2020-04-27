import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsPreventiveConfigurationsRoutingModule } from './global-settings-preventive-configurations-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsPreventiveConfigurationsComponent } from './global-settings-preventive-configurations.component';

@NgModule({
  declarations: [
    GlobalSettingsPreventiveConfigurationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsPreventiveConfigurationsRoutingModule
  ]
})
export class GlobalSettingsPreventiveConfigurationsModule { }
