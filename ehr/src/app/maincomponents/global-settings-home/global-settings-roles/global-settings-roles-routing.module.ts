import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsRolesComponent } from "./global-settings-roles.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsRolesComponent,
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
export class GlobalSettingsRolesRoutingModule { }
