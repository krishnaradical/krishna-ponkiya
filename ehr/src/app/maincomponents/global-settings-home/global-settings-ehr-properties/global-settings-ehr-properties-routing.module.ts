import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsEhrPropertiesComponent } from "./global-settings-ehr-properties.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsEhrPropertiesComponent,
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
export class GlobalSettingsEhrPropertiesRoutingModule { }
