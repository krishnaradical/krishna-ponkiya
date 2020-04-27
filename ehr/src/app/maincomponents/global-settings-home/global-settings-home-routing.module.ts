import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalSettingsHomeComponent } from "./global-settings-home.component";

const routes: Routes = [
  {
    path: '', 
    component: GlobalSettingsHomeComponent,
    children: [
    
      
      { 
        path: 'global-settings-overview',loadChildren: 
         './global-settings-overview/global-settings-overview.module#GlobalSettingsOverviewModule',
       },
      { 
        path: 'global-settings-clinical-documents',loadChildren: 
         './global-settings-clinical-documents/global-settings-clinical-documents.module#GlobalSettingsClinicalDocumentsModule',
       },
       { 
        path: 'global-settings-cptcodes',loadChildren: 
         './global-settings-cptcodes/global-settings-cptcodes.module#GlobalSettingsCptcodesModule',
       },
       { 
        path: 'global-settings-ehr-actions',loadChildren: 
         './global-settings-ehr-actions/global-settings-ehr-actions.module#GlobalSettingsEhrActionsModule',
       },
       { 
        path: 'global-settings-ehr-properties',loadChildren: 
         './global-settings-ehr-properties/global-settings-ehr-properties.module#GlobalSettingsEhrPropertiesModule',
       },
       { 
        path: 'global-settings-features',loadChildren: 
         './global-settings-features/global-settings-features.module#GlobalSettingsFeaturesModule',
       },
       { 
        path: 'global-settings-hpi-elements',loadChildren: 
         './global-settings-hpi-elements/global-settings-hpi-elements.module#GlobalSettingsHpiElementsModule',
       },
       { 
        path: 'global-settings-legal-documents',loadChildren: 
         './global-settings-legal-documents/global-settings-legal-documents.module#GlobalSettingsLegalDocumentsModule',
       },
       { 
        path: 'global-settings-orders',loadChildren: 
         './global-settings-orders/global-settings-orders.module#GlobalSettingsOrdersModule',
       },
       { 
        path: 'global-settings-password-configurations',loadChildren: 
         './global-settings-password-configurations/global-settings-password-configurations.module#GlobalSettingsPasswordConfigurationsModule',
       },
       { 
        path: 'global-settings-patient-actions',loadChildren: 
         './global-settings-patient-actions/global-settings-patient-actions.module#GlobalSettingsPatientActionsModule',
       },
       { 
        path: 'global-settings-physical-exam',loadChildren: 
         './global-settings-physical-exam/global-settings-physical-exam.module#GlobalSettingsPhysicalExamModule',
       },
       { 
        path: 'global-settings-preventive-configurations',loadChildren: 
         './global-settings-preventive-configurations/global-settings-preventive-configurations.module#GlobalSettingsPreventiveConfigurationsModule',
       },

       { 
        path: 'global-settings-roles',loadChildren: 
         './global-settings-roles/global-settings-roles.module#GlobalSettingsRolesModule',
       },

       { 
        path: 'global-settings-ros-elements',loadChildren: 
         './global-settings-ros-elements/global-settings-ros-elements.module#GlobalSettingsRosElementsModule',
       },

      

       { 
        path: 'global-settings-virtual-documents',loadChildren: 
         './global-settings-virtual-documents/global-settings-virtual-documents.module#GlobalSettingsVirtualDocumentsModule',
       },
    ]
  }
]
@NgModule({
    imports: [
      RouterModule.forChild(routes),
      ],
    exports: [RouterModule]
  })
  export class GlobalSettingsHomeRoutingModule { }