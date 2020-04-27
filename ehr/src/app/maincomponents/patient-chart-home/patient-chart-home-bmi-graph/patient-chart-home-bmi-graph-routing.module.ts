import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeBmiGraphComponent } from "./patient-chart-home-bmi-graph.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeBmiGraphComponent,
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
export class PatientChartHomeBmiGraphRoutingModule { }
