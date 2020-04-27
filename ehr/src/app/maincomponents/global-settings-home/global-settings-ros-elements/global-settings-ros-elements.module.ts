import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsRosElementsRoutingModule } from './global-settings-ros-elements-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsRosElementsComponent } from './global-settings-ros-elements.component';

@NgModule({
  declarations: [
    GlobalSettingsRosElementsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsRosElementsRoutingModule
  ]
})
export class GlobalSettingsRosElementsModule { }
