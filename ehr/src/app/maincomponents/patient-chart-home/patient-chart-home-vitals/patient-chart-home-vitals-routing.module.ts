import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeVitalsComponent } from "./patient-chart-home-vitals.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeVitalsComponent,
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
  export class PatientChartHomeVitalsRoutingModule { }