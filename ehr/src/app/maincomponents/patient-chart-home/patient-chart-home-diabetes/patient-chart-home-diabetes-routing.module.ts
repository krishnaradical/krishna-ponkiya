import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeDiabetesComponent } from "./patient-chart-home-diabetes.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeDiabetesComponent,
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
export class PatientChartHomeDiabetesRoutingModule { }
