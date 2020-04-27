import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsFeaturesRoutingModule } from './global-settings-features-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsFeaturesComponent } from './global-settings-features.component';

@NgModule({
  declarations: [
    GlobalSettingsFeaturesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsFeaturesRoutingModule
  ]
})
export class GlobalSettingsFeaturesModule { }
