import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';

import { GlobalSettingsHomeRoutingModule } from './global-settings-home-routing.module';
import { GlobalSettingsHomeComponent } from './global-settings-home.component';

@NgModule({
  declarations: [
   GlobalSettingsHomeComponent,
  
   
    
   
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     GlobalSettingsHomeRoutingModule
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})
export class GlobalSettingsHomeModule { }
