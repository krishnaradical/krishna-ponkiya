import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsVirtualDocumentsComponent } from "./global-settings-virtual-documents.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsVirtualDocumentsComponent,
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
export class GlobalSettingsVirtualDocumentsRoutingModule { }
