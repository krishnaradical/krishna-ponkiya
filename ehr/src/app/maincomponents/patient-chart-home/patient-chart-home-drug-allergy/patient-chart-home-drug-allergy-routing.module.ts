import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeDrugAllergyComponent } from "./patient-chart-home-drug-allergy.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeDrugAllergyComponent,
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
export class PatientChartHomeDrugAllergyRoutingModule { }
