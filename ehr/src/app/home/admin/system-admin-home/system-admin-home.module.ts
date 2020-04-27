import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SystemAdminHomeCustomerGroupManagementComponent } from './system-admin-home-customer-group-management/system-admin-home-customer-group-management.component';
import { SystemAdminHomeRoutingModule } from './system-admin-home-routing.module';

import { SystemAdminHomeComponent } from './system-admin-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { SystemAdminHomeOverviewComponent } from './system-admin-home-overview/system-admin-home-overview.component';
import { CustomergroupAddeditComponent } from './customergroup-addedit/customergroup-addedit.component';
import { CustomergroupDetailsComponent } from './customergroup-details/customergroup-details.component';
import { UserManagementComponent } from '../../user/user-management/user-management.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from 'src/app/_helpers';



@NgModule({
  declarations: [
    UserManagementComponent,
    SystemAdminHomeComponent,
    SystemAdminHomeCustomerGroupManagementComponent,
    SystemAdminHomeOverviewComponent,
    CustomergroupAddeditComponent,
    CustomergroupDetailsComponent ,
  
    
  ],
  imports: [
   CommonModule,
   ReactiveFormsModule,       
    FormsModule,
    CustomMaterialModule,
    SystemAdminHomeRoutingModule,
    
  ],
 providers :[
  { provide: LocationStrategy, useClass: HashLocationStrategy,
   },
  
 ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule ]
})
export class SystemAdminHomeModule { }
