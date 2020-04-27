import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsPhysicalExamRoutingModule } from './global-settings-physical-exam-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsPhysicalExamComponent } from './global-settings-physical-exam.component';

@NgModule({
  declarations: [
    GlobalSettingsPhysicalExamComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsPhysicalExamRoutingModule
  ]
})
export class GlobalSettingsPhysicalExamModule { }
