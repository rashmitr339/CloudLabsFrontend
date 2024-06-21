import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserlabComponent } from './userlab/userlab.component';
import { DeploycftComponent } from './deploycft/deploycft.component';
import { ResultsComponent } from './results/results.component';
import { EventsComponent } from './events/events.component';
import { AdminlabComponent } from './adminlab/adminlab.component';
import { Events2Component } from './events2/events2.component';
import { AdmineventsComponent } from './adminevents/adminevents.component';
import { Adminevents2Component } from './adminevents2/adminevents2.component';
import { AdmincostComponent } from './admincost/admincost.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { EditquestionComponent } from './editquestion/editquestion.component';
import { Addquestion2Component } from './addquestion2/addquestion2.component';
import { Editquestion2Component } from './editquestion2/editquestion2.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminviewusersComponent } from './adminviewusers/adminviewusers.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'userlab', component:UserlabComponent},
  {path:'deploycft', component:DeploycftComponent},
  {path:'result', component:ResultsComponent},
  {path:'event', component:EventsComponent},
  {path:'adminlab', component:AdminlabComponent},
  {path:'eventpage2', component:Events2Component},
  {path:'adminevent',component:AdmineventsComponent},
  {path:'admineventpage2',component:Adminevents2Component},
  {path:'admincost',component:AdmincostComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'add', component:AddquestionComponent},
  {path:'edit/:id', component:EditquestionComponent},
  {path:'add2', component:Addquestion2Component},
  {path:'edit2/:id',component:Editquestion2Component},
  {path:'userregister', component:UserregisterComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'features', component:FeaturesComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'viewusers', component:AdminviewusersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
