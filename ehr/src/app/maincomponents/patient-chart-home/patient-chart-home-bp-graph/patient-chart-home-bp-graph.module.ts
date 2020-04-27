import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeBpGraphRoutingModule } from './patient-chart-home-bp-graph-routing.module';
import { PatientChartHomeBpGraphComponent } from './patient-chart-home-bp-graph.component';

@NgModule({
  declarations: [
    PatientChartHomeBpGraphComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeBpGraphRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})


export class PatientChartHomeBpGraphModule { }
