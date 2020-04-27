import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsRosElementsComponent } from "./global-settings-ros-elements.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsRosElementsComponent,
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
export class GlobalSettingsRosElementsRoutingModule { }
