import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeGeneralAllergyRoutingModule } from './patient-chart-home-general-allergy-routing.module';
import { PatientChartHomeGeneralAllergyComponent } from './patient-chart-home-general-allergy.component';

@NgModule({
  declarations: [
    PatientChartHomeGeneralAllergyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeGeneralAllergyRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})



export class PatientChartHomeGeneralAllergyModule { }
