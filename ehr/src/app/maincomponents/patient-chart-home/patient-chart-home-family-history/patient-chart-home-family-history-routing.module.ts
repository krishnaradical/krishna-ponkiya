import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeFamilyHistoryComponent } from "./patient-chart-home-family-history.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeFamilyHistoryComponent,
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
export class PatientChartHomeFamilyHistoryRoutingModule { }
