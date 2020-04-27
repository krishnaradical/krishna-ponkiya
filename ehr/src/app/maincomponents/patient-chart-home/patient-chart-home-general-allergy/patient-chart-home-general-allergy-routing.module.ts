import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeGeneralAllergyComponent } from "./patient-chart-home-general-allergy.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeGeneralAllergyComponent,
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
export class PatientChartHomeGeneralAllergyRoutingModule { }
