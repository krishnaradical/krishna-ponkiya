import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientChartHomeComponent } from './patient-chart-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { PatientChartHomeRoutingModule } from './patient-chart-home-routing.module';
import { PatientChartHomeOverviewComponent } from './patient-chart-home-overview/patient-chart-home-overview.component';

@NgModule({
  declarations: [
    PatientChartHomeComponent,
    PatientChartHomeOverviewComponent,
    
    
   
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,       
     FormsModule,
     CustomMaterialModule,
     PatientChartHomeRoutingModule
  ],
  providers :[
    { provide: LocationStrategy, useClass: HashLocationStrategy,
      
     },
    
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   exports: [RouterModule ]
})
export class PatientChartHomeModule { }
