import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeDiabetesGraphRoutingModule } from './patient-chart-home-diabetes-graph-routing.module';
import { PatientChartHomeDiabetesGraphComponent } from './patient-chart-home-diabetes-graph.component';

@NgModule({
  declarations: [
    PatientChartHomeDiabetesGraphComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeDiabetesGraphRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})


export class PatientChartHomeDiabetesGraphModule { }
