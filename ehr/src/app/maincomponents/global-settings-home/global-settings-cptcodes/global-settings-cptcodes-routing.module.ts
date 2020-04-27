import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsCptcodesComponent } from "./global-settings-cptcodes.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsCptcodesComponent,
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
export class GlobalSettingsCptcodesRoutingModule { }
