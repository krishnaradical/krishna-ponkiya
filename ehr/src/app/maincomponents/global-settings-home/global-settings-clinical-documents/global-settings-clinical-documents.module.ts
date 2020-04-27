import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsClinicalDocumentsRoutingModule } from './global-settings-clinical-documents-routing.module';
import { GlobalSettingsClinicalDocumentsComponent } from './global-settings-clinical-documents.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';

@NgModule({
  declarations: [
    GlobalSettingsClinicalDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
    GlobalSettingsClinicalDocumentsRoutingModule
  ]
})
export class GlobalSettingsClinicalDocumentsModule { }
