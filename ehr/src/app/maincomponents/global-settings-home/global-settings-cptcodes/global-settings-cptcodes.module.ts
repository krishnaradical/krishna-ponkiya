import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsClinicalDocumentsRoutingModule } from '../global-settings-clinical-documents/global-settings-clinical-documents-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsCptcodesComponent } from './global-settings-cptcodes.component';

@NgModule({
  declarations: [
    GlobalSettingsCptcodesComponent
  ],
  imports: [
    CommonModule,
  
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
    GlobalSettingsClinicalDocumentsRoutingModule
  ]
})
export class GlobalSettingsCptcodesModule { }
