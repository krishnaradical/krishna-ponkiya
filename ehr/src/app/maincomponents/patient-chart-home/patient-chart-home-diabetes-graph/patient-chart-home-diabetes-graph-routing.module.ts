import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeDiabetesGraphComponent } from "./patient-chart-home-diabetes-graph.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeDiabetesGraphComponent,
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
export class PatientChartHomeDiabetesGraphRoutingModule { }
