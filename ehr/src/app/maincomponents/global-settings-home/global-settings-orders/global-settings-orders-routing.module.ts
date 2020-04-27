import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsOrdersComponent } from "./global-settings-orders.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsOrdersComponent,
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
export class GlobalSettingsOrdersRoutingModule { }
