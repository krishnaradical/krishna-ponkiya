import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeImmunaizationsComponent } from "./patient-chart-home-immunaizations.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeImmunaizationsComponent,
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
export class PatientChartHomeImmunaizationsRoutingModule { }
