import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsPatientActionsRoutingModule } from './global-settings-patient-actions-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsPatientActionsComponent } from './global-settings-patient-actions.component';

@NgModule({
  declarations: [
    GlobalSettingsPatientActionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsPatientActionsRoutingModule
  ]
})
export class GlobalSettingsPatientActionsModule { }
