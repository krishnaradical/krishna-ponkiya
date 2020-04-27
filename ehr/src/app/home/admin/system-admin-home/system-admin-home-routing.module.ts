import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { SystemAdminHomeComponent } from './system-admin-home.component';
import { SystemAdminHomeCustomerGroupManagementComponent } from './system-admin-home-customer-group-management/system-admin-home-customer-group-management.component';
import { SystemAdminHomeOverviewComponent } from './system-admin-home-overview/system-admin-home-overview.component';
import { CustomergroupAddeditComponent } from './customergroup-addedit/customergroup-addedit.component';
import { CustomergroupDetailsComponent } from './customergroup-details/customergroup-details.component';




const routes: Routes = [
  {
    path: '', 
    component: SystemAdminHomeComponent,
    
    children: [
    
      { path:'system-admin-home-overview' ,component :SystemAdminHomeOverviewComponent},
      { path:'system-admin-home-customer-group-management',
      component: SystemAdminHomeCustomerGroupManagementComponent},
       {
        path: 'customergroup-add',
        component: CustomergroupAddeditComponent,
        data: { title: 'Add CustomerGroup' ,isEdit:false}
      },
      {
        path: 'customergroup-add/:id',
        component: CustomergroupAddeditComponent,
        data: { title: 'Edit CustomerGroup' ,isEdit:true}
      },
      {
        path: 'customergroup-details/:id',
        component: CustomergroupDetailsComponent,
        data: { title: 'CustomerGroup Details'}
      },
      
    ]},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})

export class SystemAdminHomeRoutingModule { }