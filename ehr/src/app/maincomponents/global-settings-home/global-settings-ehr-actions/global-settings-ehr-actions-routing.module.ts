import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsEhrActionsComponent } from "./global-settings-ehr-actions.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsEhrActionsComponent,
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
export class GlobalSettingsEhrActionsRoutingModule { }
