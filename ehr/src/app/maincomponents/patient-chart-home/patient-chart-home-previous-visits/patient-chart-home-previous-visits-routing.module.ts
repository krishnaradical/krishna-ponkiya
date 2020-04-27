import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomePreviousVisitsComponent } from "./patient-chart-home-previous-visits.component";



const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomePreviousVisitsComponent,
      children: [
        
      ]
    }
  ]
@NgModule({
    imports: [
      RouterModule.forChild(routes),
      ],
    exports: [RouterModule]
  })
export class PatientChartHomePreviousVisitsRoutingModule { }
