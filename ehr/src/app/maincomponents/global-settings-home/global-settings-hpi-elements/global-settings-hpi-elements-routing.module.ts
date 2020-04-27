import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsHpiElementsComponent } from "./global-settings-hpi-elements.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsHpiElementsComponent,
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
export class GlobalSettingsHpiElementsRoutingModule { }
