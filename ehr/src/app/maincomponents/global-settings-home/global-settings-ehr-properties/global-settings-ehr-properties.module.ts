import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsEhrPropertiesRoutingModule } from './global-settings-ehr-properties-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsEhrPropertiesComponent } from './global-settings-ehr-properties.component';

@NgModule({
  declarations: [
    GlobalSettingsEhrPropertiesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsEhrPropertiesRoutingModule
  ]
})
export class GlobalSettingsEhrPropertiesModule { }
