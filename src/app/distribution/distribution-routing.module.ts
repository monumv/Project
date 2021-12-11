import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DistributionModule } from './distribution.module';
import { DistributionMasterComponent } from './master/distribution-master/distribution-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SaleorderComponent } from './pages/saleorder/saleorder.component';
import { DistributionmastersComponent } from './pages/distributionmasters/distributionmasters.component';

import { DeliveryrouteComponent } from './pages/deliveryroute/deliveryroute.component';
import { AccountrouteComponent } from './pages/accountroute/accountroute.component';
import { EmployeerouteComponent } from './pages/employeeroute/employeeroute.component';
import { TransportersComponent } from './pages/transporters/transporters.component';
import { MaterialComponent } from './pages/material/material.component';
import { MaterialgroupComponent } from './pages/materialgroup/materialgroup.component';
import { IndirectorderComponent } from './pages/indirectorder/indirectorder.component';
import { DirectorderComponent } from './pages/directorder/directorder.component';
import { BranchtobranchComponent } from './pages/branchtobranch/branchtobranch.component';

import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PendingordersComponent } from './pages/pendingorders/pendingorders.component';
import { AcceptedordersComponent } from './pages/acceptedorders/acceptedorders.component';
import { ReadytopackComponent } from './pages/readytopack/readytopack.component';
import { ReadytobillComponent } from './pages/readytobill/readytobill.component';
import { DispatchedordersComponent } from './pages/dispatchedorders/dispatchedorders.component';
import { DeliveredordersComponent } from './pages/deliveredorders/deliveredorders.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ApprovedComponent } from './pages/approved/approved.component';
import { ReturnedComponent } from './pages/returned/returned.component';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { AgeingreportComponent } from './pages/ageingreport/ageingreport.component';
import { DistributionsettingsComponent } from './pages/distributionsettings/distributionsettings.component';
import { CutofftimeComponent } from './pages/cutofftime/cutofftime.component';
import { UndereviewComponent } from './pages/undereview/undereview.component';
import { VisitmanagementComponent } from './pages/visitmanagement/visitmanagement.component';
import { VisitplanComponent } from './pages/visitplan/visitplan.component';
import { VisitscheduleComponent } from './pages/visitschedule/visitschedule.component';
import { SaleareaplaneerComponent } from './pages/saleareaplaneer/saleareaplaneer.component';
import { AreaassignedacccountsComponent } from './pages/areaassignedacccounts/areaassignedacccounts.component';
import { AreassignedemployeeComponent } from './pages/areassignedemployee/areassignedemployee.component';
import { DeliveryrouteplannerComponent } from './pages/deliveryrouteplanner/deliveryrouteplanner.component';
import { AdroutesComponent } from './pages/adroutes/adroutes.component';
import { AssigndeliveryroutesComponent } from './pages/assigndeliveryroutes/assigndeliveryroutes.component';
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';


const routes: Routes = [
 { path: '', component: DistributionMasterComponent,

 children: [
   { path: '', component: DashboardComponent}, 
   { path: 'saleorder', component: SaleorderComponent}, 
   { path: 'distributionmasters', component: DistributionmastersComponent}, 
   { path: 'deliveryroute', component: DeliveryrouteComponent}, 
   { path: 'accountroute', component: AccountrouteComponent}, 
   { path: 'employeeroute', component: EmployeerouteComponent}, 
   { path: 'transporters', component: TransportersComponent}, 
   { path: 'material', component: MaterialComponent}, 
   { path: 'materialgroup', component: MaterialgroupComponent}, 
   { path: 'indirectorder', component: IndirectorderComponent}, 
   { path: 'directorder', component: DirectorderComponent}, 
   { path: 'branchtobranch', component: BranchtobranchComponent}, 
   { path: 'subscription', component: SubscriptionComponent}, 
   { path: 'pendingorders', component: PendingordersComponent}, 
   { path: 'acceptedorders', component: AcceptedordersComponent}, 
   { path: 'readytopack', component: ReadytopackComponent}, 
   { path: 'dispatchedorders', component: DispatchedordersComponent}, 
   { path: 'readytobill', component: ReadytobillComponent}, 
   { path: 'deliveredorders', component: DeliveredordersComponent}, 
   { path: 'complaint', component: ComplaintComponent}, 
   { path: 'approved', component: ApprovedComponent}, 
   { path: 'returned', component: ReturnedComponent}, 
   { path: 'allorders', component: AllordersComponent}, 
   { path: 'ageingreport', component: AgeingreportComponent}, 
   { path: 'distributionsettings', component: DistributionsettingsComponent}, 
   { path: 'cutofftime', component: CutofftimeComponent},  
   { path: 'undereview', component: UndereviewComponent},  
   { path: 'visitmanagement', component: VisitmanagementComponent},  
   { path: 'visitplan', component: VisitplanComponent},  
   { path: 'visitschedule', component: VisitscheduleComponent},  
   { path: 'saleareaplaneer', component: SaleareaplaneerComponent},  
   { path: 'areaassignedacccounts', component: AreaassignedacccountsComponent},  
   { path: 'areassignedemployee', component: AreassignedemployeeComponent},  
   { path: 'deliveryrouteplanner', component: DeliveryrouteplannerComponent},  
   { path: 'adroutes', component: AdroutesComponent},  
   { path: 'assigndeliveryroutes', component: AssigndeliveryroutesComponent},  
   { path: 'countryplanner', component: CountryplannerComponent}, 

],
 
  },
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributionRoutingModule { }
