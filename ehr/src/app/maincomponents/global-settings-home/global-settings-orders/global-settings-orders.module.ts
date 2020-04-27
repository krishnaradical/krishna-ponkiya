import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSettingsOrdersRoutingModule } from './global-settings-orders-routing.module';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalSettingsOrdersComponent } from './global-settings-orders.component';

@NgModule({
  declarations: [
    GlobalSettingsOrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    GlobalSettingsOrdersRoutingModule
  ]
})
export class GlobalSettingsOrdersModule { }
