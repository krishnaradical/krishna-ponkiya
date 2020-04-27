import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeHospitalizationsComponent } from "./patient-chart-home-hospitalizations.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeHospitalizationsComponent,
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
export class PatientChartHomeHospitalizationsRoutingModule { }
