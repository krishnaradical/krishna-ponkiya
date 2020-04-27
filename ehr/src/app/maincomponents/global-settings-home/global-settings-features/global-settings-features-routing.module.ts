import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsFeaturesComponent } from "./global-settings-features.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsFeaturesComponent,
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
export class GlobalSettingsFeaturesRoutingModule { }
