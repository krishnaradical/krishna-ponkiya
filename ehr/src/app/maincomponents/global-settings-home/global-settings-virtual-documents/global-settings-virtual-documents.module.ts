import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsVirtualDocumentsRoutingModule } from './global-settings-virtual-documents-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { GlobalSettingsVirtualDocumentsComponent } from './global-settings-virtual-documents.component';

@NgModule({
  declarations: [
    GlobalSettingsVirtualDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsVirtualDocumentsRoutingModule
  ]
})
export class GlobalSettingsVirtualDocumentsModule { }
