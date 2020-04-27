import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeBpGraphComponent } from "./patient-chart-home-bp-graph.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeBpGraphComponent,
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
export class PatientChartHomeBpGraphRoutingModule { }
