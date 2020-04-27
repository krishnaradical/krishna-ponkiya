import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientChartHomeNotesSoapComponent } from "./patient-chart-home-notes-soap.component";

const routes: Routes = [
    {
      path: '', 
      component: PatientChartHomeNotesSoapComponent,
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
export class PatientChartHomeNotesSoapRoutingModule { }
