import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeHeightGraphComponent } from "./patient-chart-home-height-graph.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeHeightGraphComponent,
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
export class PatientChartHomeHeightGraphRoutingModule { }
