import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule }   from '@angular/core';

import { HomeComponent } from './home';

import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';


import { AccountAccessComponent } from './shared/account-access-component/account-access.component';

import { LoginComponent } from './login/login.component';

import { CustomerGroupAdminHomeComponent } from './home/admin/customer-group-admin-home/customer-group-admin-home.component';
import { FacilityAdminHomeComponent } from './home/admin/facility-admin-home/facility-admin-home.component';
import { DoctorHomeComponent } from './home/user/doctor-home/doctor-home.component';
import { NurseDoctorHomeComponent } from './home/user/nurse-doctor-home/nurse-doctor-home.component';
import { FrontdeskHomeComponent } from './home/user/frontdesk-home/frontdesk-home.component';
import { MessagesHomeComponent } from './maincomponents/messages-home/messages-home.component';
import { FilesHomeComponent } from './maincomponents/files-home/files-home.component';
import { ReportsHomeComponent } from './maincomponents/reports-home/reports-home.component';
import { TicketsHomeComponent } from './maincomponents/tickets-home/tickets-home.component';
import { DemographicsHomeComponent } from './maincomponents/demographics-home/demographics-home.component';
import { SettingsHomeComponent } from './maincomponents/settings-home/settings-home.component';
import { NotfoundHomeComponent } from './shared/notfound-home/notfound-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'account-access-home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
   { path: 'account-access-home',component :AccountAccessComponent, 
   canActivate: [AuthGuard],
   children: [
    { path : '', redirectTo: 'notfound-home', pathMatch: 'full'},
    
    { path :'customer-group-admin-home' ,component :CustomerGroupAdminHomeComponent ,pathMatch :'full'},
    { path :'facility-admin-home' ,component :FacilityAdminHomeComponent ,pathMatch :'full'},
    { path :'doctor-home' ,component :DoctorHomeComponent ,pathMatch :'full'},
    { path :'nurse-home' ,component :NurseDoctorHomeComponent,pathMatch :'full'},
    { path :'frontdesk-home' ,component :FrontdeskHomeComponent ,pathMatch :'full'},
    { path :'messages-home',component :MessagesHomeComponent, pathMatch: 'full'},
     { path :'files-home' ,component :FilesHomeComponent ,pathMatch :'full'},
    { path :'reports-home' ,component :ReportsHomeComponent ,pathMatch :'full'},
    { path :'tickets-home' ,component :TicketsHomeComponent,pathMatch :'full'},
    
    { path :'settings-home' ,component :SettingsHomeComponent ,pathMatch :'full'},
    { path :'notfound-home' ,component :NotfoundHomeComponent,pathMatch :'full'},
    
    { 
      path: 'global-settings-home',loadChildren: 
       './maincomponents/global-settings-home/global-settings-home.module#GlobalSettingsHomeModule',
     },
    
    { 
      path: 'system-admin-home',loadChildren: 
       './home/admin/system-admin-home/system-admin-home.module#SystemAdminHomeModule',
     },
     { path :'demographics-home' ,component :DemographicsHomeComponent ,pathMatch :'full'},
   
  { 
    path: 'patient-chart-home',loadChildren: 
     './maincomponents/patient-chart-home/patient-chart-home.module#PatientChartHomeModule',
   },
  
  ]},
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
