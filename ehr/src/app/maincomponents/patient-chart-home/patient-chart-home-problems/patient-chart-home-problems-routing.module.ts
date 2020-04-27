import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeProblemsComponent } from "./patient-chart-home-problems.component";


const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeProblemsComponent,
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
export class PatientChartHomeProblemsRoutingModule { }
