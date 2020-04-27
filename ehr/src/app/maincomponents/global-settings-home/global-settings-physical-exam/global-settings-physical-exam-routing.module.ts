import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsPhysicalExamComponent } from "./global-settings-physical-exam.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsPhysicalExamComponent,
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
export class GlobalSettingsPhysicalExamRoutingModule { }
