import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeDocumentsComponent } from "./patient-chart-home-documents.component";
const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeDocumentsComponent,
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
export class PatientChartHomeDocumentsRoutingModule { }
