import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeMedicationsComponent } from "./patient-chart-home-medications.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeMedicationsComponent,
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
export class PatientChartHomeMedicationsRoutingModule { }
