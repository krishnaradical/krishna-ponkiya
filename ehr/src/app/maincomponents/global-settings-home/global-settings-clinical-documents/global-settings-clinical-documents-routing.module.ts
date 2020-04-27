import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsClinicalDocumentsComponent } from "./global-settings-clinical-documents.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsClinicalDocumentsComponent,
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
export class GlobalSettingsClinicalDocumentsRoutingModule { }
