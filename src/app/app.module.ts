import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserlabComponent } from './userlab/userlab.component';
import { DeploycftComponent } from './deploycft/deploycft.component';
import { EventsComponent } from './events/events.component';
import { ResultsComponent } from './results/results.component';
import { AdminlabComponent } from './adminlab/adminlab.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Events2Component } from './events2/events2.component';
import { AdmineventsComponent } from './adminevents/adminevents.component';
import { Adminevents2Component } from './adminevents2/adminevents2.component';
import { AdmincostComponent } from './admincost/admincost.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { EditquestionComponent } from './editquestion/editquestion.component';
import { Addquestion2Component } from './addquestion2/addquestion2.component';
import { Editquestion2Component } from './editquestion2/editquestion2.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminviewusersComponent } from './adminviewusers/adminviewusers.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserlabComponent,
    DeploycftComponent,
    EventsComponent,
    ResultsComponent,
    AdminlabComponent,
    Events2Component,
    AdmineventsComponent,
    Adminevents2Component,
    AdmincostComponent,
    AdmindashboardComponent,
    AddquestionComponent,
    EditquestionComponent,
    Addquestion2Component,
    Editquestion2Component,
    UserloginComponent,
    UserregisterComponent,
    AdminloginComponent,
    AboutusComponent,
    FeaturesComponent,
    ContactusComponent,
    AdminviewusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
