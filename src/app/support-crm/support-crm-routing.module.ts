import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportcrmMasterComponent } from './master/supportcrm-master/supportcrm-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { OpenComponent } from './pages/open/open.component';
import { ClosedComponent } from './pages/closed/closed.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AllcomplaintsComponent } from './pages/allcomplaints/allcomplaints.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SolutiongroupComponent } from './pages/solutiongroup/solutiongroup.component';
import { SolutionlistComponent } from './pages/solutionlist/solutionlist.component';
import { ComplaintgroupsComponent } from './pages/complaintgroups/complaintgroups.component';
import { ComplaintlistComponent } from './pages/complaintlist/complaintlist.component';
import { CrmformsComponent } from './pages/crmforms/crmforms.component';
import { FomrtemplatesComponent } from './pages/fomrtemplates/fomrtemplates.component';
import { TargetaudienceComponent } from './pages/targetaudience/targetaudience.component';
import { AddAccountCustomerDetailsComponent } from './pages/add-account-customer-details/add-account-customer-details.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { FormresponsesComponent } from './pages/formresponses/formresponses.component';

const routes: Routes = [
 { path: '', component: SupportcrmMasterComponent,

 children: [
   { path: '', component: DashboardComponent}, 
   { path: 'complaints', component: ComplaintsComponent},   
   { path: 'open', component: OpenComponent},  
   { path: 'closed', component: ClosedComponent},  
   { path: 'feedback', component: FeedbackComponent},  
   { path: 'allcomplaints', component: AllcomplaintsComponent}, 
   { path: 'settings', component: SettingsComponent},
   { path: 'solutiongroup', component: SolutiongroupComponent},
   { path: 'solutionlist', component: SolutionlistComponent},
   { path: 'complaintgroups', component: ComplaintgroupsComponent},
   { path: 'complaintlist', component: ComplaintlistComponent},
   { path: 'crmforms', component: CrmformsComponent},
   { path: 'fomrtemplates', component: FomrtemplatesComponent},
   { path: 'targetaudience', component: TargetaudienceComponent},
   { path: 'customer-details', component: CustomerDetailsComponent},
   { path: 'formresponses', component: FormresponsesComponent},
 ],
},

   { path: 'add-account-customer-details', component: AddAccountCustomerDetailsComponent},
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportCrmRoutingModule { }
