import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsOverviewRoutingModule } from './global-settings-overview-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsOverviewComponent } from './global-settings-overview.component';

@NgModule({
  declarations: [
    GlobalSettingsOverviewComponent
  ],
  imports: [
    GlobalSettingsOverviewRoutingModule, 
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    CommonModule
  ]
})
export class GlobalSettingsOverviewModule { }
