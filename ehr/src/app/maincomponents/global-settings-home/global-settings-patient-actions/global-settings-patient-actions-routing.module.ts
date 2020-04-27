import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsPatientActionsComponent } from "./global-settings-patient-actions.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsPatientActionsComponent,
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
export class GlobalSettingsPatientActionsRoutingModule { }
