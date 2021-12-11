import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceMasterComponent } from './master/service-master/service-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { OpenComponent } from './pages/open/open.component';
import { RequestserviceComponent } from './pages/requestservice/requestservice.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { CrmsettingsComponent } from './pages/crmsettings/crmsettings.component';
import { RouteplannerComponent } from './pages/routeplanner/routeplanner.component';
import { FoclaimsComponent } from './pages/foclaims/foclaims.component';
import { ChargesdueComponent } from './pages/chargesdue/chargesdue.component';
import { ChargesclaimsComponent } from './pages/chargesclaims/chargesclaims.component';
import { ServicecatelogueComponent } from './pages/servicecatelogue/servicecatelogue.component';
import { ComplaintManagementComponent } from './pages/complaint-management/complaint-management.component';
import { ComplaintTypeComponent } from './pages/complaint-type/complaint-type.component';
import { ComplaintgroupComponent } from './pages/complaintgroup/complaintgroup.component';
import { ComplaintdetailsComponent } from './pages/complaintdetails/complaintdetails.component';

const routes: Routes = [

  
 { path: '', component: ServiceMasterComponent,

 children: [
   { path: '', component: DashboardComponent},
   { path: 'open', component: OpenComponent},
   { path: 'complaints', component: ComplaintsComponent},
   { path: 'feedbacks', component: FeedbacksComponent},
   { path: 'crmsettings', component: CrmsettingsComponent},
   { path: 'routeplanner', component: RouteplannerComponent},
   { path: 'foclaims', component: FoclaimsComponent},
   { path: 'chargesdue', component: ChargesdueComponent},
   { path: 'chargesclaims', component: ChargesclaimsComponent},
   { path: 'servicecatelogue', component: ServicecatelogueComponent},
   { path: 'complaint-management', component: ComplaintManagementComponent},
   { path: 'complaint-type', component: ComplaintTypeComponent},
   { path: 'complaintgroup', component: ComplaintgroupComponent},
   { path: 'complaintdetails', component: ComplaintdetailsComponent},
 ],
 
  },    
  
   { path: 'requestservice', component: RequestserviceComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCrmRoutingModule { }
