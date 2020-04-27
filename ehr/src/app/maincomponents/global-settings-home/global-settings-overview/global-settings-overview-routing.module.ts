import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsOverviewComponent } from "./global-settings-overview.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsOverviewComponent,
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
export class GlobalSettingsOverviewRoutingModule { }
