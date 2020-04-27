import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeObgynComponent } from "./patient-chart-home-obgyn.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeObgynComponent,
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
export class PatientChartHomeObgynRoutingModule { }
