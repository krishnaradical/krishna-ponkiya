import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsPasswordConfigurationsComponent } from "./global-settings-password-configurations.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsPasswordConfigurationsComponent,
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
export class GlobalSettingsPasswordConfigurationsRoutingModule { }
