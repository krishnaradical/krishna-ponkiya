import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsPreventiveConfigurationsComponent } from "./global-settings-preventive-configurations.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsPreventiveConfigurationsComponent,
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
export class GlobalSettingsPreventiveConfigurationsRoutingModule { }
