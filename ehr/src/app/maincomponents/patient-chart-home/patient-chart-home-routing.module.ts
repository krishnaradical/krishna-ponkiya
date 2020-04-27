import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,PreloadAllModules,  Routes } from '@angular/router';
import { PatientChartHomeComponent } from './patient-chart-home.component';
import { PatientChartHomeOverviewComponent } from './patient-chart-home-overview/patient-chart-home-overview.component';


const routes: Routes = [
  {
    path: '', 
    component: PatientChartHomeComponent,
    children: [
      { path:'patient-chart-home-overview' ,component :PatientChartHomeOverviewComponent},
      
      { 
        path: 'patient-chart-home-vitals',loadChildren: 
         './patient-chart-home-vitals/patient-chart-home-vitals.module#PatientChartHomeVitalsModule',
       },
       { 
        path: 'patient-chart-home-surgeries',loadChildren: 
         './patient-chart-home-surgeries/patient-chart-home-surgeries.module#PatientChartHomeSurgeriesModule',
       },
       { 
        path: 'patient-chart-home-problems',loadChildren: 
         './patient-chart-home-problems/patient-chart-home-problems.module#PatientChartHomeProblemsModule',
       },
       { 
        path: 'patient-chart-home-previous-visits',loadChildren: 
         './patient-chart-home-previous-visits/patient-chart-home-previous-visits.module#PatientChartHomePreviousVisitsModule',
       },
       { 
        path: 'patient-chart-home-obgyn',loadChildren: 
         './patient-chart-home-obgyn/patient-chart-home-obgyn.module#PatientChartHomeObgynModule',
       },
       { 
        path: 'patient-chart-home-notes-soap',loadChildren: 
         './patient-chart-home-notes-soap/patient-chart-home-notes-soap.module#PatientChartHomeNotesSoapModule',
       },
       { 
        path: 'patient-chart-home-medications',loadChildren: 
         './patient-chart-home-medications/patient-chart-home-medications.module#PatientChartHomeMedicationsModule',
       },
       { 
        path: 'patient-chart-home-labs',loadChildren: 
         './patient-chart-home-labs/patient-chart-home-labs.module#PatientChartHomeLabsModule',
       },
       { 
        path: 'patient-chart-home-immunaizations',loadChildren: 
         './patient-chart-home-immunaizations/patient-chart-home-immunaizations.module#PatientChartHomeImmunaizationsModule',
       },
       { 
        path: 'patient-chart-home-hospitalizations',loadChildren: 
         './patient-chart-home-hospitalizations/patient-chart-home-hospitalizations.module#PatientChartHomeHospitalizationsModule',
       },
       { 
        path: 'patient-chart-home-height-graph',loadChildren: 
         './patient-chart-home-height-graph/patient-chart-home-height-graph.module#PatientChartHomeHeightGraphModule',
       },
       { 
        path: 'patient-chart-home-general-allergy',loadChildren: 
         './patient-chart-home-general-allergy/patient-chart-home-general-allergy.module#PatientChartHomeGeneralAllergyModule',
       },

       { 
        path: 'patient-chart-home-family-history',loadChildren: 
         './patient-chart-home-family-history/patient-chart-home-family-history.module#PatientChartHomeFamilyHistoryModule',
       },

       { 
        path: 'patient-chart-home-drug-allergy',loadChildren: 
         './patient-chart-home-drug-allergy/patient-chart-home-drug-allergy.module#PatientChartHomeDrugAllergyModule',
       },

       { 
        path: 'patient-chart-home-documents',loadChildren: 
         './patient-chart-home-documents/patient-chart-home-documents.module#PatientChartHomeDocumentsModule',
       },

       { 
        path: 'patient-chart-home-diabetes-graph',loadChildren: 
         './patient-chart-home-diabetes-graph/patient-chart-home-diabetes-graph.module#PatientChartHomeDiabetesGraphModule',
       },


       { 
        path: 'patient-chart-home-diabetes',loadChildren: 
         './patient-chart-home-diabetes/patient-chart-home-diabetes.module#PatientChartHomeDiabetesModule',
       },

       { 
        path: 'patient-chart-home-bp-graph',loadChildren: 
         './patient-chart-home-bp-graph/patient-chart-home-bp-graph.module#PatientChartHomeBpGraphModule',
       },

       { 
        path: 'patient-chart-home-bmi-graph',loadChildren: 
         './patient-chart-home-bmi-graph/patient-chart-home-bmi-graph.module#PatientChartHomeBmiGraphModule',
       },

      
      
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class PatientChartHomeRoutingModule { }
