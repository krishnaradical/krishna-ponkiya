import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsHpiElementsRoutingModule } from './global-settings-hpi-elements-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsHpiElementsComponent } from './global-settings-hpi-elements.component';

@NgModule({
  declarations: [
    GlobalSettingsHpiElementsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsHpiElementsRoutingModule
  ]
})
export class GlobalSettingsHpiElementsModule { }
