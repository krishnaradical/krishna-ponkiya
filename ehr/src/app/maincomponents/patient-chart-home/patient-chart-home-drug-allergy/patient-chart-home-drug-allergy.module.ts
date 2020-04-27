import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientChartHomeDrugAllergyRoutingModule } from './patient-chart-home-drug-allergy-routing.module';
import { PatientChartHomeDrugAllergyComponent } from './patient-chart-home-drug-allergy.component';

@NgModule({
  declarations: [
    PatientChartHomeDrugAllergyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeDrugAllergyRoutingModule
    
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})



export class PatientChartHomeDrugAllergyModule { }
