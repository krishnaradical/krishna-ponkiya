import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsLegalDocumentsRoutingModule } from './global-settings-legal-documents-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsLegalDocumentsComponent } from './global-settings-legal-documents.component';

@NgModule({
  declarations: [
    GlobalSettingsLegalDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsLegalDocumentsRoutingModule
  ]
})
export class GlobalSettingsLegalDocumentsModule { }
