import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeDiabetesRoutingModule } from './patient-chart-home-diabetes-routing.module';
import { PatientChartHomeDiabetesComponent } from './patient-chart-home-diabetes.component';

@NgModule({
  declarations: [
    PatientChartHomeDiabetesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeDiabetesRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})


export class PatientChartHomeDiabetesModule { }
