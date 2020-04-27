import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PatientChartHomeLabsComponent } from "./patient-chart-home-labs.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeLabsComponent,
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
export class PatientChartHomeLabsRoutingModule { }
