import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeHeightGraphRoutingModule } from './patient-chart-home-height-graph-routing.module';
import { PatientChartHomeHeightGraphComponent } from './patient-chart-home-height-graph.component';

@NgModule({
  declarations: [
    PatientChartHomeHeightGraphComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeHeightGraphRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})

export class PatientChartHomeHeightGraphModule { }
