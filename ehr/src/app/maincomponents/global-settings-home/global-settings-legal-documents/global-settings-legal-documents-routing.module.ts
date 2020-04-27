import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsLegalDocumentsComponent } from "./global-settings-legal-documents.component";
const routes: Routes = [
    {
      path: '', 
      component: GlobalSettingsLegalDocumentsComponent,
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
export class GlobalSettingsLegalDocumentsRoutingModule { }
