import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PatientChartHomeSurgeriesComponent } from "./patient-chart-home-surgeries.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeSurgeriesComponent,
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
export class PatientChartHomeSurgeriesRoutingModule { }