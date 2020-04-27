import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsEhrActionsRoutingModule } from './global-settings-ehr-actions-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsEhrActionsComponent } from './global-settings-ehr-actions.component';

@NgModule({
  declarations: [
    GlobalSettingsEhrActionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsEhrActionsRoutingModule
  ]
})
export class GlobalSettingsEhrActionsModule { }
