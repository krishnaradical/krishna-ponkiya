import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { RegisterComponent } from './register';
import { EhrHeaderComponent } from './shared/ehr-header/ehr-header.component';
import { EhrFooterComponent } from './shared/ehr-footer/ehr-footer.component';
import { AccountAccessComponent } from './shared/account-access-component/account-access.component';
import { LoginComponent } from './login/login.component';

import { NotfoundHomeComponent } from './shared/notfound-home/notfound-home.component';
import { CustomMaterialModule } from './core/material.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
import { FlexLayoutModule } from "@angular/flex-layout";
import { EhruserAddeditComponent } from './home/user/user-management/ehruser-addedit/ehruser-addedit.component';
import { EhruserDetailsComponent } from './home/user/user-management/ehruser-details/ehruser-details.component';

import { PatientGuard } from './_guards/patient.guard';

import { NavService } from './_services/nav.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    EhrHeaderComponent,
    EhrFooterComponent,
    AccountAccessComponent,
    FilesHomeComponent,
    MessagesHomeComponent,
    ReportsHomeComponent,
    NurseDoctorHomeComponent,
    
    DemographicsHomeComponent,
    TicketsHomeComponent,
   NotfoundHomeComponent,
   FrontdeskHomeComponent,
   CustomerGroupAdminHomeComponent,
   FacilityAdminHomeComponent,
   
   DoctorHomeComponent,
   SettingsHomeComponent,
   EhruserAddeditComponent,
   EhruserDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,       
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
   providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PatientGuard,
        NavService,
        
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    exports :[
     
    ],

    
    
  bootstrap: [AppComponent]
})
export class AppModule { }
