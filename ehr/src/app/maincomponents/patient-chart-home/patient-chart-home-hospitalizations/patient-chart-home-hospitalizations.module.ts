import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeHospitalizationsRoutingModule } from './patient-chart-home-hospitalizations-routing.module';
import { PatientChartHomeHospitalizationsComponent } from './patient-chart-home-hospitalizations.component';

@NgModule({
  declarations: [
  PatientChartHomeHospitalizationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeHospitalizationsRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})
export class PatientChartHomeHospitalizationsModule { }
