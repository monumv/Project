import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalescrmModule } from './salescrm.module';
import { SalescrmMasterComponent } from './master/salescrm-master/salescrm-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DealsComponent } from './pages/deals/deals.component';
import { OpenDealComponent } from './pages/open-deal/open-deal.component';
import { WonDealComponent } from './pages/won-deal/won-deal.component';
import { DroppedDealComponent } from './pages/dropped-deal/dropped-deal.component';
import { CrmremindersComponent } from './pages/crmreminders/crmreminders.component';
import { CrmSettingsComponent } from './pages/crm-settings/crm-settings.component';
import { CrmTemplateComponent } from './pages/crm-template/crm-template.component';
import { PipelinetemplateComponent } from './pages/pipelinetemplate/pipelinetemplate.component';
import { LeadSourceComponent } from './pages/lead-source/lead-source.component';
import { LeadpluginsComponent } from './pages/leadplugins/leadplugins.component';
import { JustdialComponent } from './pages/justdial/justdial.component';
import { IndiamartComponent } from './pages/indiamart/indiamart.component';
import { WebApiComponent } from './pages/web-api/web-api.component';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import { AddleadsComponent } from './pages/addleads/addleads.component';
import { CrmreportsComponent } from './pages/crmreports/crmreports.component';
import { QadataComponent } from './pages/qadata/qadata.component';
import { DialogComponent } from './pages/dialog/dialog.component';


const routes: Routes = [
 { path: '', component: SalescrmMasterComponent,

 children: [
   { path: '', component: DashboardComponent},  
   { path: 'deals', component: DealsComponent},   
   { path: 'crm-settings', component: CrmSettingsComponent}, 
   { path: 'leadplugins', component: LeadpluginsComponent}, 
   { path: 'justdial', component: JustdialComponent}, 
   { path: 'open-deal', component: OpenDealComponent},
   { path: 'lead-source', component: LeadSourceComponent},  
   { path: 'crm-template', component: CrmTemplateComponent},  

   { path: 'won-deal', component: WonDealComponent}, 
   { path: 'dropped-deal', component: DroppedDealComponent}, 
   { path: 'indiamart', component: IndiamartComponent}, 
   { path: 'crmreminders', component: CrmremindersComponent},   
   { path: 'pipelinetemplate', component: PipelinetemplateComponent},   
   { path: 'web-api', component: WebApiComponent},   
   { path: 'deal-details', component: DealDetailsComponent},
   { path: 'addleads', component: AddleadsComponent},
   { path: 'qadata', component: QadataComponent},
   { path: 'dialog', component: DialogComponent},
   { path: 'crmreports', component: CrmreportsComponent},
 ],

  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalescrmRoutingModule { }
